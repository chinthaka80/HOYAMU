FROM php:8.3-fpm-alpine

# Install system dependencies and PHP extensions
RUN apk add --no-cache \
    postgresql-dev \
    libxml2-dev \
    oniguruma-dev \
    zip \
    unzip \
    git \
    curl

RUN docker-php-ext-install pdo_pgsql mbstring xml pcntl

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
