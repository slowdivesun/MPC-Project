from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/diary", methods=["GET"])
def diary_entry():
    return "<p>Here is the diary entry</p>"
    pass