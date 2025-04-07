# Base image with Python 3.9
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install system dependencies required by OpenCV and DeepFace
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxrender1 \
    libxext6 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the FaceCompare application code
COPY . .

# Create a folder for celebrity images if it doesn't exist
RUN mkdir -p images

# Expose the port the app runs on
EXPOSE 5001

# Command to run the application
CMD ["python", "api.py"]
