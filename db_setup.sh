#!/bin/sh
echo "Mysql container is running on port 3306:3306"
docker run --name users_DB  -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=userdb -p 3306:3306 -d mysql:latest