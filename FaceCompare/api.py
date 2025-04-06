from flask import Flask
from flask_cors import CORS
from routes import routes

app = Flask(__name__)
# Configure CORS to allow your frontend domain
CORS(app, resources={r"/*": {
    "origins": ["https://whoyou-dqh4fudjhze0ggb5.canadacentral-01.azurewebsites.net"],
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type"]
}})

# Register blueprint
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)