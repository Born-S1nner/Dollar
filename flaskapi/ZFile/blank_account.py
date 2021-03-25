#Key routes and functions
import datetime
from Zmodels.db_model import CoinMember, Refressher
from flask_restful import Resource
from flask import request
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity, jwt_required

class Home(Resource):
    def get(self):
        get = "Dollar Dream"
        return {"get" : get}   

class LoginUser(Resource):
    def post(self):
        body = request.get_json()
        username = body.get('username')
        password = body.get('password')
        user = CoinMember.objects.get(username=username)
        authorized = user.check_password(str(password))
        if not authorized:
            return {'Error': "Incorrect Email or Password"}, 401

        access_expires = datetime.timedelta(hours=23)
        refresh_expires = datetime.timedelta(minutes=30)

        access_token = create_access_token(identity=username, expires_delta=access_expires, fresh=True)
        refresh_token = create_refresh_token(identity=username, expires_delta=refresh_expires)
        RToken = Refressher(refresh=refresh_token, username=username)
        RToken.save()
        ret = {
            "access_token": access_token,
            "refresh_token": refresh_token
        }
        return ret, 200

class NewUser(Resource):
    def post(self):
        body = request.get_json()
        username = body.get("username")
        if not username:
            return {'Error': "UserName Not Included"}, 405
        email = body.get("email")
        if not email:
            return {'Error': "Email Not Included"}, 406
        password = body.get("password")
        if not password:
            return {'Error': "Password Not Included"}, 407
        user = CoinMember(username=username, email=email, password=password)
        user.hash_password()
        user.save()
        id = user.id
        return {'id': str(id)}, 200

class refresh(Resource):
    @jwt_required(refresh=True)
    def post(self):
        body = request.get_json()
        username = body.get('username')
        current_user = get_jwt_identity()
        userName = Refressher.objects.get(username=current_user)
        userKey = userName['username']
        if username == userKey:
            new_token = create_access_token(identity=current_user)
            ret = {
                'access_token': new_token
            }
            return ret, 200
        else:
            return {'Error': 'unable to connect, Logout and Log back in.'}, 403

class protection(Resource):
    @jwt_required()
    def get(self):
        current_user = get_jwt_identity()
        return {'message': f'{current_user}'}, 200
