from .db import db

class Wishlist(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

  db.UniqueConstraint(user_id, game_id)

  def to_dict(self):
    return {
      "user_id": self.user_id,
      "game_id": self.game_id
    }
