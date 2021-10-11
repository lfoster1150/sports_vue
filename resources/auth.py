from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password


class Login(Resource):
    def post(self):
        data = request.get_json()
        try:
            user = User.find_one(data["email"]).json()
            is_password = compare_password(
                data["password"], user["password_digest"])
            if is_password:
                payload = {
                    "id": user["id"],
                    "email": user["email"]
                }
                token = create_token(payload)
                return {"user": payload, "token": token}
            else:
                return {"msg": "Incorrect Credentials"}, 404
        except:
            return {"msg": "Login Error"}, 404


class Session(Resource):
    def get(self):
        header = request.headers.get('Authorization')
        if request.headers.get('Authorization'):
            token = header.split(" ")[1]
        else:
            token = ''
            return {"msg": "Invalid Token"}, 404
        return read_token(token)


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "name": data['name'],
            "email": data['email'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        user.create()
        return user.json(), 201
