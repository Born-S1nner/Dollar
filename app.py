#flask head
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)

app.config['MONGODB_SETTING'] = {
    'host': #Some URL for database
}
app.config["JWT_SECRET_KEY"] = #NowDisIsTheK3y

#main system
from db_model import initialize_db
from urlkeys.routes import initialize_routes
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

initialize_db(app)
initialize_routes(api)

if __name__ == "__main__":
    app.run(debug=True)
