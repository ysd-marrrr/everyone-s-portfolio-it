FROM php:8.0.6-fpm-alpine

RUN apk add --update-cache --no-cache postgresql-dev oniguruma-dev && \
    docker-php-ext-install pdo pdo_pgsql pgsql mbstring
