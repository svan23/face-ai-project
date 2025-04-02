from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from deepface import DeepFace
import tempfile
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/top-matches", methods=["POST"])
def top_matches():
    if "file" not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files["file"]
    print("Received file:", file.filename)  # Print the file name

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
            file.save(tmp.name)
            reference_image_path = tmp.name

        folder = os.path.join(os.path.dirname(__file__), "images")
        print("DEBUG Images folder path:", folder)
        if not os.path.exists(folder):
            return jsonify({"error": "Images folder not found"}), 500
        
        image_files = [f for f in os.listdir(folder) if f.lower().endswith(".jpg")]
        
        results = []
        for img in image_files:
            compare_path = os.path.join(folder, img)
            result = DeepFace.verify(reference_image_path, compare_path, enforce_detection=False)
            distance = result.get("distance", float("inf"))
            results.append((img, distance))
        
        sorted_matches = sorted(results, key=lambda x: x[1])[:3]
        matches = [{"img": img, "distance": distance} for img, distance in sorted_matches]
        print("Returning matches:", matches)  # Print what is being returned to React
        return jsonify(matches)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/top-match", methods=["POST"])
def top_match():
    if "file" not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
            file.save(tmp.name)
            reference_image_path = tmp.name

        folder = os.path.join(os.path.dirname(__file__), "images")
        if not os.path.exists(folder):
            return jsonify({"error": "Images folder not found"}), 500

        image_files = [f for f in os.listdir(folder) if f.lower().endswith(".jpg")]
        best_match = None
        best_distance = float("inf")
        for img in image_files:
            compare_path = os.path.join(folder, img)
            result = DeepFace.verify(reference_image_path, compare_path, enforce_detection=False)
            distance = result.get("distance", float("inf"))
            if distance < best_distance:
                best_distance = distance
                best_match = img

        if best_match is None:
            return jsonify({"error": "No matches found"}), 404

        best_img_path = os.path.join(folder, best_match)
        with open(best_img_path, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode("utf-8")
        
        print("Sending best matching image:", best_match, "with distance:", best_distance)
        return jsonify({
            "img": best_match,
            "distance": best_distance,
            "image_base64": encoded_string
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)