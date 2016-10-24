from flask import Flask, request
import json


app = Flask(__name__)

global_lookup = {}


@app.route('/<username>')
def get_user(username):
    username = str(username)
    if username not in global_lookup:
        return "User not found", 404
    else:
        return json.dumps(global_lookup[username])


@app.route('/<username>/update', methods=['POST'])
def add_user(username):
    user_data = request.get_json()
    global_lookup[username] = user_data
    return "success", 200

if __name__ == '__main__':
    app.run(debug=True)
