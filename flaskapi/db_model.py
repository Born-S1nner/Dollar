#mongoengine Model
from flask_mongoengine import MongoEngine

db = MongoEngine()
def initialize_db (app):
    db.init_app(app)

#User Model
import mongoengine_goodjson as gj
from flask_bcrypt import generate_password_hash, check_password_hash

class CoinMember(gj.Document):
    username = db.StringField(required=True, unique=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, unique=True, min_length=4)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)
