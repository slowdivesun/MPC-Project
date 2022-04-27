from flask import Flask, jsonify, request

from dotenv import dotenv_values
from flask_pymongo import pymongo
import certifi

config = dotenv_values(".env")

ca = certifi.where()

CONNECTION_STRING = config["MONGO_URI"]
client = pymongo.MongoClient(CONNECTION_STRING, tlsCAFile=ca)

db = client.get_database('Diary')


app = Flask(__name__)

@app.route("/diary", methods=["GET"])
def hello():
    return "Hello"
    pass

@app.route("/emotion", methods=["POST"])
def addEmotion(entryId):
    pass