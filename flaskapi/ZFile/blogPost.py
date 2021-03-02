#where the blog message gets postede
from flask import request
from flask_restful import Resource
from db_model import BlogPoster, CoinMember
from flask_jwt_extended import jwt_required, get_jwt_identity

class BlogLine(Resource):
  def get(self):
    bloglist = BlogPoster.objects().to_json()
    return {"blog": bloglist}

  @jwt_required
  def post(self):
      user_id = get_jwt_identity()
      body = request.get_json()
      coin = CoinMember.objects.get(id=user_id)
      blogpost = BlogPoster(**body, added_by=coin)
      blogpost.save()
      coin.update(push__blog=blogpost)
      coin.save()
      id = blogpost.id
      return {"id": str(id)}, 200
