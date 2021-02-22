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
from db_model import initialize_db
from blank_account import init_routes

URL = config('URL')
KEY = config('KEY')
print(URL)
print(KEY)
app.config['MONGODB_SETTINGS'] = {
    'host': "mongodb+srv://"+URL
}
app.config["JWT_SECRET_KEY"] = KEY

initialize_db(app)
init_routes(api)

@app.route('/')
def hello():
  return 'Hello World!'

if __name__ == "__main__":
  app.run(debug=True)
