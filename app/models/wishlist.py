from .db import db

Wishlist = db.Table(
  "wishlists",
  db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
  db.Column('game_id', db.Integer, db.ForeignKey('games.id'), primary_key=True)
)

# def to_dict(self):
  #   return {
  #     "user_id": self.user_id,
  #     "game_id": self.game_id
  #   }
