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
            game_art='https://image.api.playstation.com/vulcan/ap/rnd/202101/'
            '0722/bJWPbCbc3UL6jzgsgTgIGcoK.png',
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
        ),
        Game(
            name='Resident Evil Village',
            release_date=date(2021, 5, 7),
            game_art='https://static3.srcdn.com/wordpress/wp-content/uploads/2020/11/Resident-Evil-Village-Chris-Redfield-Key-Art.jpg',
            platform_id=2,
        ),
        Game(
            name='Hood: Outlaws & Legends',
            release_date=date(2021, 5, 10),
            game_art='https://cdn.akamai.steamstatic.com/steam/apps/927350/ss_d73d68ad6fce2e728e030f4e5ad9bad94f4822e1.1920x1080.jpg?t=1618307969',
            platform_id=2,
        ),
        Game(
            name='Mass Effect: Legendary Edition',
            release_date=date(2021, 5, 14),
            game_art='https://media.contentapi.ea.com/content/dam/masseffect/images/2020/10/mele-hero-large-keyart-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
            platform_id=2,
        ),
        Game(
            name='Chivalry 2',
            release_date=date(2021, 6, 8),
            game_art='https://chivalry2.com/wp-content/uploads/2020/06/TrebuchetBattle1080-1.jpg',
            platform_id=2,
        ),
        Game(
            name='Elder Scrolls Online: Blackwood',
            release_date=date(2021, 6, 8),
            game_art='https://venturebeat.com/wp-content/uploads/2021/01/BWD_WorldEvent_DagonsDaedricMinions_1920x1080.jpg?w=1200&strip=all',
            platform_id=2,
        ),
        Game(
            name='Final Fantasy 7 Remake Intergrade',
            release_date=date(2021, 6, 10),
            game_art='https://imgix.bustle.com/uploads/image/2021/2/25/11677e36-090b-495a-888d-dbe5fcc2076f-evg4vn0xaaczfcz.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
            platform_id=2,
        ),
        Game(
            name='Guilty Gear -Strive-',
            release_date=date(2021, 6, 11),
            game_art='https://cdn.mos.cms.futurecdn.net/HJvveQbuCzmcmgqRhB63ZV.jpg',
            platform_id=2,
        ),
        Game(
            name='Ratchet & Clank: Rift Apart',
            release_date=date(2021, 6, 11),
            game_art='https://gmedia.playstation.com/is/image/SIEPDC/ratchet-and-clank-rift-apart-hero-banner-desktop-01-en-27jan21?$native$',
            platform_id=2,
        ),
        Game(
            name='Scarlet Nexus',
            release_date=date(2021, 6, 25),
            game_art='https://static.bandainamcoent.eu/high/red-strings/01-page-setup/game_headermobile_1280x720_NewKA.jpg',
            platform_id=2,
        ),
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
