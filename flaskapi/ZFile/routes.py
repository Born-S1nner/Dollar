#Routes for Api
from .blank_account import Home, LoginUser, NewUser, refresh, protection


def init_routes(api):
    api.add_resource(Home, '/')
    api.add_resource(LoginUser, '/user/login')
    api.add_resource(NewUser, '/user/signup')
    api.add_resource(refresh, '/user/refresh')
    api.add_resource(protection, '/user/protect')
