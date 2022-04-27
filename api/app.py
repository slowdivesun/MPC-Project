from flask import Flask, jsonify, request
import pymongo
import db

app = Flask(__name__)

@app.route("/diary", methods=["GET"])
def hello():
    return "Hello"
    pass

@app.route("/emotion", methods=["GET"])
def addEmotion():
    return str(list(db.db.users.find()))