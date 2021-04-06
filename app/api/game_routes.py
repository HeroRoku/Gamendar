from flask import Blueprint
from app.models import Game

game_routes = Blueprint('games', __name__)

@game_routes.route('/<int:id>')
def game(id):
  game = Game.query.get(id)
  return game.to_dict()
