#Routes for Api
from .blank_account import Home, LoginUser, NewUser, refresh, protection
from .blogPost import BlogLines, BlogLine

def init_routes(api):
    api.add_resource(Home, '/')
    api.add_resource(LoginUser, '/user/login')
    api.add_resource(NewUser, '/user/signup')
    api.add_resource(refresh, '/user/refresh')
    api.add_resource(protection, '/user/protect')

    api.add_resource(BlogLines, '/blog/public')
    api.add_resource(BlogLine, '/blog/private')
