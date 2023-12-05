FILE_PATH="./tables"

wrangler d1 execute gamezz $1 --file "${FILE_PATH}/drop_tables.sql" -y
wrangler d1 execute gamezz $1 --file "${FILE_PATH}/create_tables.sql" -y
wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NUsers.sql" -y
# wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NGames.sql" -y
wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NGenres.sql" -y
wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NPlatforms.sql" -y
# wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NPlatformGames.sql" -y
# wrangler d1 execute gamezz $1 --file "${FILE_PATH}/NGenreGames.sql" -y
