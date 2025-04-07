FROM python:3.11-slim

# Install system dependencies including libGL for OpenCV and libglib2.0 for libgthread
RUN apt-get update && apt-get install -y libgl1-mesa-glx libglib2.0-0

# Set working directory
WORKDIR /app

# Copy only requirements and install them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the API code
COPY . .

# Set environment variables for Flask
ENV FLASK_APP=api.py
ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5001

# Run the Flask application
CMD ["python3", "api.py"]
