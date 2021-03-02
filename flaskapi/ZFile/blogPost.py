#where the blog message gets postede
from flask import request
from flask_restful import Resource
from flaskapi.db_model import BlogPoster, CoinMember
from flask_jwt_extended import jwt_required, get_jwt_identity

class BlogLine(Resource):
  def get(self):
    bloglist = BlogPoster.objects().to_json()
    return {"blog": bloglist}

  @jwt_required
  def post(self):
      _id = get_jwt_identity()
      body = request.get_json()
      user = CoinMember.objects.get(identity=_id)
      blogpost = BlogPoster(**body, added_by=user)
      blogpost.save()
      user.update(push__blog=blogpost)
      user.save()
      id = blogpost.id
      return {"blog_id": str(id)}
