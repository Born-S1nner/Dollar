class InternalServerError(Exception):
  pass

class SchemaValidationError(Exception):
  pass

class UsernameAlreadyExist(Exception):
  pass

class UpdatingError(Exception):
  pass

class DeletingError(Exception):
  pass

class BlogDoesntExist(Exception):
  pass

class UnauthorizedError(Exception):
  pass

class BadTokenError(Exception):
  pass

class ExpiredTokenError(Exception):
  pass

errors = {
  "InternalServerError": {
    "Message": "Something major is going down in the server",
    "status": 500
  },
  "SchemaValidationError": {
    "Message": "Request is missing requirments",
    "status": 400
  },
  "UsernameAlreadyExist": {
    "Message": "Username has been taken.",
    "status": 400
  },
  "UpdatingError": {
    "Message": "Prohibite from updating another user's blog",
    "status": 403
  },
  "DeletingError": {
    "Message": "Prohibite from deleting another user's blog",
    "status": 403
  },
  "BlogDoesntExist": {
    "Message": "Blog with given id doesn't exist",
    "status": 400
  },
  "UnauthorizedError": {
    "Message": "Invalid username/password",
    "Status": 401
  },
  "BadTokenError": {
    "Message": "Invalid Token",
    "Status": 403
  },
  "ExpiredTokenError": {
    "Message": "Token has expired, refresh the token",
    "Status": 403
  }
}
