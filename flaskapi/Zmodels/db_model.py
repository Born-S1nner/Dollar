#mongoengine Model
from flask_mongoengine import MongoEngine

db = MongoEngine()
def initialize_db (app):
    db.init_app(app)

#User Model
import mongoengine_goodjson as gj
from flask_bcrypt import generate_password_hash, check_password_hash

class Refressher(gj.Document):
    username = db.StringField(required=True)
    refresh = db.StringField(required=True)

class BlogPoster(gj.Document):
    blog = db.StringField(required=True, max_length=1000)
    added_by = db.ReferenceField('CoinMember')

class CoinMember(gj.Document):
    username = db.StringField(required=True, unique=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, unique=True, min_length=4)
    blogs = db.ListField(db.ReferenceField('BlogPoster', register_delete_rule=db.PULL))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

CoinMember.register_delete_rule(BlogPoster, 'added_by', db.CASCADE)
