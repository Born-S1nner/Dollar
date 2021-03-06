from flask import Flask
from flask_restful import Api
from decouple import config
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from Zmodels.error_model import errors

app = Flask(__name__)
KEY = config('KEY')
app.config["JWT_SECRET_KEY"] = KEY

api = Api(app, errors=errors)
JWTManager(app)
Bcrypt(app)
CORS(app)

#main system
from Zmodels.db_model import initialize_db
from ZFile.routes import init_routes

URL = config('URL')
app.config['MONGODB_SETTINGS'] = {
    'host': "mongodb+srv://"+URL
}

initialize_db(app)
init_routes(api)

import sys
import logging

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

if __name__ == "__main__":
  app.run(debug=True)
