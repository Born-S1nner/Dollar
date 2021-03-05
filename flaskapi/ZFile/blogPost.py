#where the blog message gets postede
from flask import request
from flask_restful import Resource
from Zmodels.db_models import BlogPoster, CoinMember
from flask_jwt_extended import jwt_required, get_jwt_identity

class BlogLine(Resource):
  def get(self):
    bloglist = BlogPoster.objects().to_json()
    return {"blog": bloglist}

  @jwt_required
  def post(self):
    coin_id = get_jwt_identity()
    body = request.get_json()
    coin = CoinMember.objects.get(id=coin_id)
    message = BlogPoster(**body)
    message.save()
    id = message.id
    print(id)
    print(coin)
    return{'id': str(id), 'coin_id': str(coin)}, 200
