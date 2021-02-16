#flask head
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_folder='client/build', static_url_path='')
api = Api(app)
bcrypt = Bcrypt(app)
cors = CORS(app)

#main system
from db_model import initialize_db
from urlkeys.routes import initialize_routes
from flask_jwt_extended import JWTManager

jwt = JWTManager(app)

app.config['MONGODB_SETTINGS'] = {
    'host': #URLfordatabase that you will never know
}
app.config["JWT_SECRET_KEY"] = #secret key that needs a env

initialize_db(app)
initialize_routes(api)

if __name__ == "__main__":
    app.run(debug=True)
