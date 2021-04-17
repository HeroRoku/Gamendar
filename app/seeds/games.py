from app.models import db, Game
from datetime import date

# Adds platforms


def seed_games():

    games = [
      Game(
        name='Outriders',
        release_date=date(2021, 4, 1),
        game_art='https://gamespot1.cbsistatic.com/'
        'uploads/original/1581/15811374/3815218-outriders.jpg',
        platform_id=2,
      ),
      Game(
        name='Oddworld: Soulstorm',
        release_date=date(2021, 4, 6),
        game_art='https://cdn.wccftech.com/'
        'wp-content/uploads/2020/06/OddworldSoulstorm011_HD.png',
        platform_id=2,
      ),
      Game(
        name='MLB The Show 21',
        release_date=date(2021, 4, 20),
        game_art='https://cdn.vox-cdn.com/thumbor/'
        'jjaJ_hgplf528PycRxPCQPfD04U=/1400x1400/filters:format(jpeg)/'
        'cdn.vox-cdn.com/uploads/chorus_asset/file/22273040/'
        'apps.55407.14103945068092177.52ef161b_f4b8_486f_83f8_23675f6dbf29.'
        'jpg',
        platform_id=2,
      ),
      Game(
        name='MotoGP 21',
        release_date=date(2021, 4, 22),
        game_art='https://milestone.it/wp-content/uploads/'
        '2021/02/MotoGP21-FullGame-40-gigapixel-scale-2_00x-min-scaled.jpg',
        platform_id=2,
      ),
      Game(
        name='Judgment',
        release_date=date(2021, 4, 23),
        game_art='https://www.keengamer.com/wp-content/uploads/'
        '2021/02/judgment-ps5-xbox-stadia.jpg',
        platform_id=2,
      ),
      Game(
        name='Returnal',
        release_date=date(2021, 4, 30),
        game_art='https://i.ytimg.com/vi/_Gtxmzl171E/maxresdefault.jpg',
        platform_id=2,
      ),
      Game(
        name='Terminator: Resistance Enhanced',
        release_date=date(2021, 4, 30),
        game_art='https://www.thesixthaxis.com/wp-content/uploads/'
        '2019/11/TerminatorResistance-Hero500.jpg',
        platform_id=2,
      )
    ]

    for game in games:
        db.session.add(game)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the games table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_games():
    db.session.execute('TRUNCATE games;')
    db.session.commit()
