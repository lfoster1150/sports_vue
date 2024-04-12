from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from .server.models.db import db
from .server.api import create_api
import os

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
api = create_api(app)
DATABASE_URL = os.getenv('DATABASE_URL')
os.getenv('APP_SECRET')

if DATABASE_URL:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    app.config['SQLALCHEMY_ECHO'] = False
    app.env = 'production'
else:
    app.debug = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/sports_vue_db"
    app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return 'Api up!'

if __name__ == '__main__':
    app.run()
