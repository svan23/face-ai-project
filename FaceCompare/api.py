from flask import Flask
from flask_cors import CORS
from routes import routes

app = Flask(__name__)
# Option 1: Allow all origins (for development/testing)
CORS(app)

# Option 2: Allow multiple specific origins
CORS(app, 
     resources={r"/*": {
         "origins": [
             "https://whoyou-dqh4fudjhze0ggb5.canadacentral-01.azurewebsites.net", 
             "http://localhost:5173",  # For local development
             "*"  # Temporarily allow all origins for testing
         ],
         "methods": ["GET", "POST", "OPTIONS"],
         "allow_headers": ["Content-Type", "Authorization"],
         "expose_headers": ["Content-Type"],
         "supports_credentials": True,
         "max_age": 600
     }})

app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)