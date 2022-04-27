from flask import Flask, jsonify, request
import pymongo
from bson.objectid import ObjectId
import db

app = Flask(__name__)

@app.route("/diary", methods=["GET"])
def hello():
    return "Hello"
    pass

@app.route("/emotion/<id>", methods=["POST"])
def addEmotion(id):
    try:
        db.db.entries.find_one_and_update({"_id": ObjectId(id)}, {'$set': {'emotion': 'Sad'}})

        return "Emotion Saved"
    except:
        return "Server error"