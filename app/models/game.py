from .db import db


class Game(db.Model):
  __tablename__ = 'games'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), nullable=False)
  release_date = db.Column(db.Date, nullable=False)
  game_art = db.Column(db.String(1000), nullable=False)
  platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'), nullable=False)

  platforms = db.relationship('Platform', back_populates='games')
  comments = db.relationship('Comment', back_populates='games')
  users = db.relationship('User', secondary='wishlists', back_populates='games')


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "release_date": self.release_date,
      "game_art": self.game_art,
      "platform_id": self.platform_id
    }
