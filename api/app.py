from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/diary", methods=["POST"])
def diary_entry():
    pass