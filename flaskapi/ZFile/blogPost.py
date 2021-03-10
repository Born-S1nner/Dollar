#where the blog message gets postede
from flask import request
from flask_restful import Resource
from bson.objectid import ObjectId
from Zmodels.db_model import BlogPoster, CoinMember
from Zmodels.error_model import InternalServerError, SchemaValidationError, UpdatingError, DeletingError
from flask_jwt_extended import get_jwt_identity, jwt_required
from mongoengine.errors import ValidationError, FieldDoesNotExist, DoesNotExist, InvalidQueryError

class BlogLines(Resource):
  def get(self):
    bloglist = BlogPoster.objects().to_json()
    return {"blog": bloglist}

  @jwt_required(optional=True)
  def post(self):
    try:
      coin_id = get_jwt_identity()
      body = request.get_json()
      coin = CoinMember.objects.get(username=coin_id)
      blog = BlogPoster(**body, added_by=coin)
      blog.save()
      coin.update(push__blogs=blog)
      coin.save()
      id = blog.id
      return{"id": str(id)}, 200
    except(FieldDoesNotExist, ValidationError):
      raise SchemaValidationError
    except Exception as e:
      raise InternalServerError
  
class BlogLine(Resource):
  def get(self, id):
    try:
      blogline = BlogPoster.objects.get(id=ObjectId(id)).to_json()
      return {'blogline': blogline}, 200
    except Exception:
      raise InternalServerError

  @jwt_required(optional=True)
  def put(self, id):
      try:
        coin_id = get_jwt_identity()
        blog = BlogPoster.objects.get(id=ObjectId(id))
        body = request.get_json(force=True)
        blog.update(**body)
        return '', 200 
      except InvalidQueryError:
        raise SchemaValidationError
      except DoesNotExist:
        raise UpdatingError
      except Exception:
        raise InternalServerError
  
  @jwt_required(optional=True)
  def delete(self, id):
    try:
      blog = BlogPoster.objects.get(id=ObjectId(id))
      blog.delete()
      return '', 200
    except DoesNotExist:
      raise DeletingError
     except Exception:
      raise InternalServerError
