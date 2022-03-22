from flask import Flask
from dotenv import dotenv_values
from flask_pymongo import pymongo
import certifi

config = dotenv_values(".env")

ca = certifi.where()


CONNECTION_STRING = config["MONGO_URI"]
client = pymongo.MongoClient(CONNECTION_STRING, tlsCAFile=ca)

db = client.get_database('Diary')
