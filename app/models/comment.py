from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String(240), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  game_id = db.Column(db.Integer, db.ForeignKey('games.id'), nullable=False)

  users = db.relationship('User', back_populates='comments')
  games = db.relationship('Game', back_populates='comments')

  def to_dict(self):
    return {
      "id": self.id,
      "content": self.content,
      "user_id": self.user_id,
      "game_id": self.game_id
    }
