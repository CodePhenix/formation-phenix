FROM php:7.4-apache
COPY ./interface /usr/src/myapp
WORKDIR /usr/src/myapp
# CMD [ "php", "./index.php" ]
EXPOSE 9000
