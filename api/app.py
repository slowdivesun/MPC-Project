from flask import Flask, jsonify, request
import pymongo
from bson.objectid import ObjectId
import db
import pickle



app = Flask(__name__)
emotionarr = ["negative emotion","positive emotion"] #0 - negative, 1 - positive
pipelinemodel = pickle.load(open('api//model_pkl_final.pkl', 'rb'))
@app.route("/diary", methods=["GET"])
def hello():
    return "Hello"
    pass

@app.route("/emotion/<id>", methods=["POST"])
def addEmotion(id):
    diarytext = request.get_json('text')
    result = pipelinemodel.predict(diarytext)
    predictedemotion = emotionarr[result[0]] 
    try:
        db.db.entries.find_one_and_update({"_id": ObjectId(id)}, {'$set': {'emotion':predictedemotion}})

        return "Emotion Saved"
    except:
        return "Server error"