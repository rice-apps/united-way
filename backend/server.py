from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def api():
    return {
    "dollarsRaised": 500000,
    "stability": 75,
    "development": 95,
    "healthcare": 85,
    "escape": 60,
    "basicNeeds": 98,
    "totalPeople": 10000
}

if __name__ == "__main__":
    app.run(debug=True)