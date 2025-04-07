from flask import Flask
from flask_cors import CORS
from routes import routes

app = Flask(__name__)

# More robust CORS configuration
CORS(app, resources={r"/*": {
    "origins": "*",  # Allow all origins during development
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

# Register blueprint
app.register_blueprint(routes)

# Add CORS headers to all responses (belt and suspenders approach)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)