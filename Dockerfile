FROM php:7.4-apache
COPY ./interface /usr/src/myapp
WORKDIR /usr/src/myapp
EXPOSE 9000
# docker run -d -p 5000:5000 -p 80:80 --name appache-php -v "$PWD":/var/www/html php:7.4-apache 