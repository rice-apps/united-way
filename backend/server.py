from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

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

@app.route('/verify-pin', methods=['POST'])
def verify_pin():
    #Get the PIN the user submitted
    submitted_pin = request.json.get('pin')

    actual_pin = os.getenv('correct_pin')

    if submitted_pin==actual_pin:
        return jsonify({'status': 'success', 'message': 'correct pin!'})
    else:
        return jsonify({'status': 'error', 'message': 'incorrect pin - '+str(submitted_pin)})

if __name__ == "__main__":
    app.run(debug=True)