from dotenv import dotenv_values
from flask_pymongo import pymongo
import certifi
import pprint

config = dotenv_values(".env")

ca = certifi.where()

CONNECTION_STRING = config["MONGO_URI"]
client = pymongo.MongoClient(CONNECTION_STRING, tlsCAFile=ca)

db = client.get_database('myFirstDatabase')
# print(db.list_collection_names())

users = db.get_collection("users")
for user in users.find():
    print(user)