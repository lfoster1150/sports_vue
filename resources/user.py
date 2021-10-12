from models.db import db
from models.user import User
from models.team import Team
from models.user_team import user_teams
from flask_restful import Resource
from flask import request
from sqlalchemy.orm import mapper
from sqlalchemy.orm import joinedload


class UserById(Resource):
    def get(self, user_id):
        user = User.query.options(joinedload(
            'user_teams')).filter_by(id=user_id).first()
        teams = user.user_teams
        results = [t.json() for t in teams]
        return {
            **user.json(),
            "league": results
        }


class UserTeamsById(Resource):

    def get(self, user_id):
        user = User.find_by_id(user_id)
        teams = user.user_teams
        results = [t.json() for t in teams]
        return results


class UserPlayerById(Resource):

    def get(self, user_id):
        user = User.find_by_id(user_id)
        players = user.user_teams
        results = [p.json() for p in players]
        return results


class UserTeams(Resource):

    def post(self):
        data = request.get_json()
        user = User.find_by_id(data["user_id"])
        team = Team.find_by_id(data["team_id"])
        user.user_teams.append(team)
        db.session.commit()
        return {"user": user.json()["name"], "payload": data}, 201

    def delete(self):
        data = request.get_json()
        user = User.find_by_id(data["user_id"])
        team = Team.find_by_id(data["team_id"])
        user.user_teams.remove(team)
        db.session.commit()
        return {"user_delete": user.json()["name"], "payload": data}, 201
