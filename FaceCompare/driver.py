# import os
# from deepface import DeepFace
#
# reference_image = "Angelina-Jolie.jpg"
# folder = "images"
#
# image_files = [f for f in os.listdir(folder) if f.lower().endswith(".jpg") and f != reference_image]
#
# # Lower distance means a closer match
# results = []
# for img in image_files:
#     ref_path = os.path.join(folder, reference_image)
#     img_path = os.path.join(folder, img)
#     result = DeepFace.verify(ref_path, img_path, enforce_detection=False)
#     distance = result.get("distance", float("inf"))
#     results.append((img, distance))
#     print(f"DEBUG results: {result}")
#
# top_matches = sorted(results, key=lambda x: x[1])[:3]
#
# print("Top matches:")
# for img, distance in top_matches:
#     print(f"{img}: {distance}")
