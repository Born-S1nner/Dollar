from pymongo import MongoClient
from decouple import config

URL = config('URL')

mongoClient = MongoClient('mongodb+srv://'+URL)
db = mongoClient.get_database('dollar')
blog_col = db.get_collection('blog_poster')
