from models.db import db

user_teams = db.Table('user_teams',
                      db.Column('user_id', db.Integer, db.ForeignKey(
                          'user.id'), primary_key=True),
                      db.Column('team_id', db.Integer, db.ForeignKey(
                          'team.id'), primary_key=True)
                      )
