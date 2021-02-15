#flask head
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)

#main system
from db_model import initialize_db
from urlkeys.routes import initialize_routes

initialize_db(app)

api = Api(app)
initialize_routes(api)

if __name__ == "__main__":
    app.run(debug=True)
