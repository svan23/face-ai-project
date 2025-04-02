import os
import tempfile
from flask import Blueprint, jsonify, request
from face_verification import get_top_matches, get_top_match

routes = Blueprint('routes', __name__)


@routes.route('/top-matches', methods=['POST'])
def top_matches():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    print('Received file:', file.filename)

    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.jpg') as tmp:
            file.save(tmp.name)
            reference_image_path = tmp.name

        folder = os.path.join(os.path.dirname(__file__), 'images')

        print('DEBUG Images folder path:', folder)

        if not os.path.exists(folder):
            return jsonify({'error': 'Images folder not found'}), 500

        matches = get_top_matches(reference_image_path, folder)
        print('Returning matches:', matches)
        return jsonify(matches)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@routes.route('/top-match', methods=['POST'])
def top_match():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.jpg') as tmp:
            file.save(tmp.name)
            reference_image_path = tmp.name

        folder = os.path.join(os.path.dirname(__file__), 'images')

        if not os.path.exists(folder):
            return jsonify({'error': 'Images folder not found'}), 500

        result = get_top_match(reference_image_path, folder)

        if result is None:
            return jsonify({'error': 'No matches found'}), 404

        print('Sending best matching image:', result['img'], 'with distance:', result['distance'])

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500
