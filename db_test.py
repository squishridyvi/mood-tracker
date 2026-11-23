import sqlite3


def create_connection(db_file):
    con = sqlite3.connect(db_file)
    return con

result = create_connection("mood.db")