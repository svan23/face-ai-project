import os
import base64
import time
import heapq
import concurrent.futures
from deepface import DeepFace
import multiprocessing

# def get_top_matches(reference_image_path, folder, top_n=3):
#     """Compare the reference image to images in the folder and return the top N matches using multiprocessing."""
#     start_time = time.perf_counter()
#     image_files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

#     cpu_count = multiprocessing.cpu_count()

#     results = []
#     # Create a ProcessPoolExecutor to parallelize the verification calls.
#     with concurrent.futures.ProcessPoolExecutor(cpu_count) as executor:
#         # Submit a job for each image file.
#         futures = {
#             executor.submit(DeepFace.verify, reference_image_path, os.path.join(folder, img), model_name='ArcFace', enforce_detection=False): img
#             for img in image_files
#         }
#         # As each future completes, retrieve the result.
#         for future in concurrent.futures.as_completed(futures):
#             img = futures[future]
#             try:
#                 result = future.result()
#                 distance = result.get('distance', float('inf'))
#             except Exception as e:
#                 # If an error occurs during verification, set a high distance.
#                 distance = float('inf')
#             results.append((img, distance))

#     # Use heapq.nsmallest to get the top N matches efficiently.
#     sorted_matches = heapq.nsmallest(top_n, results, key=lambda x: x[1])
#     end_time = time.perf_counter()
#     print(f"Time taken for get_top_matches: {end_time - start_time:.4f} seconds")

#     # Clean up image names by removing file extension and replacing hyphens with spaces.
#     return [{'img': os.path.splitext(img)[0].replace('-', ' '), 'distance': distance} for img, distance in sorted_matches]

def get_top_match(reference_image_path, folder):
    """Compare the reference image to images in the folder and return the best match."""
    start_time  = time.perf_counter()
    image_files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

    best_match = None
    best_distance = float('inf')
    cpu_count = multiprocessing.cpu_count()

    with concurrent.futures.ProcessPoolExecutor(max_workers=2) as executor:
        futures = {
            executor.submit(
                DeepFace.verify,
                reference_image_path,
                os.path.join(folder, img),
                model_name='ArcFace',
                enforce_detection=False
            ): img
            for img in image_files
        }
        for future in concurrent.futures.as_completed(futures):
            img = futures[future]
            try:
                result = future.result()
                distance = result.get('distance', float('inf'))
            except Exception as e:
                distance = float('inf')
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
    return {
        'img': os.path.splitext(best_match)[0].replace('-', ' '),
        'distance': best_distance,
        'image_base64': encoded_string
    }
