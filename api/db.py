from flask import Flask
from dotenv import dotenv_values

config = dotenv_values(".env")

from flask_pymongo import pymongo
import certifi
ca = certifi.where()


CONNECTION_STRING = config["MONGO_URI"]
client = pymongo.MongoClient(CONNECTION_STRING, tlsCAFile=ca)

db = client.get_database('Diary')
