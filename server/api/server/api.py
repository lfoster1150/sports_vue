from flask_restful import Api
from .resources.user import UserTeams, UserTeamsById, UserById, UserPlayers
from .resources.auth import Login, Register, Session, UpdatePassword
from .resources.team import Teams, TeamDetails, TeamAPI
from .resources.player import Players, PlayerDetails, PlayerAPI
from .models.user import User
from .models.team import Team
from .models.player import Player
from .models.user_team import user_teams
from .models.user_player import user_players


def create_api(app):
    api = Api(app)
    api.add_resource(Login, '/api/auth/login')
    api.add_resource(Register, '/api/auth/register')
    api.add_resource(Session, '/api/auth/session')
    api.add_resource(UpdatePassword, '/api/auth/user/<int:user_id>')
    api.add_resource(UserTeams, '/api/user/teams')
    api.add_resource(UserPlayers, '/api/user/players')
    api.add_resource(UserById, '/api/user/<int:user_id>')
    api.add_resource(UserTeamsById, '/api/user/teams/<int:user_id>')
    api.add_resource(Teams, '/api/teams')
    api.add_resource(TeamDetails, '/api/teams/<int:team_id>')
    api.add_resource(TeamAPI, '/api/teamapi/<string:api_id>')
    api.add_resource(Players, '/api/players')
    api.add_resource(PlayerDetails, '/api/players/<int:player_id>')
    api.add_resource(PlayerAPI, '/api/playerapi/<string:api_id>')
    return api

def add_resources(app):
    api = Api(app)
    return api