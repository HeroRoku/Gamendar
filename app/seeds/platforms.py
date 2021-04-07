from app.models import db, Platform

# Adds platforms
def seed_platforms():

    ps4 = Platform(name='PlayStation 4', code='PS4')
    ps5 = Platform(name='PlayStation 5', code='PS5')
    x1 = Platform(name='Xbox One', code='XB1')
    xs = Platform(name='Xbox Series', code='XBS')
    pc = Platform(name='PC', code='PC')

    db.session.add(ps4)
    db.session.add(ps5)
    db.session.add(x1)
    db.session.add(xs)
    db.session.add(pc)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the platforms table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_platforms():
    db.session.execute('TRUNCATE platforms;')
    db.session.commit()
