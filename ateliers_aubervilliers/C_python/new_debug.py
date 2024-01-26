from tinydb import TinyDB, Query

db_players = TinyDB("db_Players.json")

# Solution 1
# Tu retire du reste de ton code toute mentions vers les "tables" et du coup le code existant marchera
Playerid = Query()
print(db_players.all)
print(db_players.get(Playerid.player_id == "Player_2"))
db_players.update({"classment": 20}, Playerid.player_id == "Player_2")


# Solution 2 - on utilise ta table.
# Tu noteras que toutes les query sont faites sur db_table au lieu de db_players
db_table = db_players.table("db_Players.json")
Playerid = Query()
print(db_table.all)
print(db_table.get(Playerid.player_id == "Player_2"))
db_table.update({"classment": 20}, Playerid.player_id == "Player_2")
