from flask import Flask
from flask_restful import Api
from decouple import config
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
JWTManager(app)
Bcrypt(app)
CORS(app)

#main system
from flaskapi.db_model import initialize_db
from flaskapi.ZFile.routes import init_routes

URL = config('URL')
KEY = config('KEY')
app.config['MONGODB_SETTINGS'] = {
    'host': "mongodb+srv://"+URL
}
app.config["JWT_SECRET_KEY"] = KEY

initialize_db(app)
init_routes(api)

import sys
import logging

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

if __name__ == "__main__":
  app.run(debug=True)
