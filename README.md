# everyone-s-portfolio-it

> My super-excellent meta-portfolio project

## Frontend

 * Nuxt
 * TypeScript
 * Tailwind CSS
 * Jest

## Backend

 * Laravel(PHP)

## Build Setup(Frontend)

```bash
$ cd frontend

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Unit test with Jest
$ yarn test
```

## Build Setup(Backend)

```bash
# build container images
$ cp ./env.local ./.env
$ docker-compose -d --build db 
$ docker-compose -d --build backend

# install composer dependencies
$ docker-compose exec backend composer install

# migration
$ cp ./backend/src/.env.local ./backend/src/.env
$ docker-compose exec backend php artisan migrate

# start the dev server
$ docker-compose exec backend php artisan serve --host 0.0.0.0
```