import os
import base64
import time
from deepface import DeepFace


def get_top_matches(reference_image_path, folder, top_n=3):
    """Compare the reference image to images in the folder and return the top N matches."""
    start_time  = time.perf_counter()
    image_files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

    results = []

    for img in image_files:

        compare_path = os.path.join(folder, img)
        result = DeepFace.verify(reference_image_path, compare_path, enforce_detection=False)
        distance = result.get('distance', float('inf'))
        results.append((img, distance))

    sorted_matches = sorted(results, key=lambda x: x[1])[:top_n]

    end_time = time.perf_counter()

    print(f"Time taken for get_top_matches: {end_time - start_time:.4f} seconds")

    return [{'img': img, 'distance': distance} for img, distance in sorted_matches]


def get_top_match(reference_image_path, folder):
    """Compare the reference image to images in the folder and return the best match."""
    start_time  = time.perf_counter()
    image_files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

    best_match = None
    best_distance = float('inf')

    for img in image_files:

        compare_path = os.path.join(folder, img)
        result = DeepFace.verify(reference_image_path, compare_path, enforce_detection=False)
        distance = result.get('distance', float('inf'))

        if distance < best_distance:
            best_distance = distance
            best_match = img

    if best_match is None:
        end_time = time.perf_counter()

        print(f"Time taken for get_top_match (no match found): {end_time - start_time:.4f} seconds")

        return None

    best_img_path = os.path.join(folder, best_match)

    with open(best_img_path, 'rb') as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

    end_time = time.perf_counter()

    print(f"Time taken for get_top_match: {end_time - start_time:.4f} seconds")

    return {'img': best_match, 'distance': best_distance, 'image_base64': encoded_string}
