from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_migrate import Migrate
from models.db import db
from resources.auth import Login, Register, Session
from resources.team import Teams, TeamDetails, TeamAPI
from models.user import User
from models.team import Team
from models.player import Player
from models.user_team import user_teams
from models.user_player import user_players


app = Flask(__name__)
CORS(app)
api = Api(app)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/sports_vue_db"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

# Resources
api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(Session, '/auth/session')
api.add_resource(Teams, '/api/teams')
api.add_resource(TeamDetails, '/api/teams/<int:team_id>')
api.add_resource(TeamAPI, '/api/teamapi/<string:api_id>')


if __name__ == '__main__':
    app.run(debug=True)
