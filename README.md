# everyone-s-portfolio-it

> My super-excellent meta-portfolio project

## Frontend

 * Nuxt
 * TypeScript
 * Tailwind CSS
 * Jest

## Backend

 * soon...

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
$ docker-compose -d --build db 
$ docker-compose -d --build backend

# install composer dependencies
$ docker-compose exec backend composer install

# migration
$ docker-compose exec php artisan migrate

# setup for authentication
$ cp ./backend/src/.env.local  ./backend/src/.env
$ docker-compose exec backend php artisan key:generate
$ docker-compose exec backend php artisan passport:install
$ docker-compose exec backend php artisan passport:client --client

# start the dev server
$ docker-compose exec backend php artisan serve --host 0.0.0.0

# create user for authentication
POST http://127.0.0.1:8000/oauth/token
Content-Type: x-www-form-urlencoded

{
    
    "grant_type": "client_credentials",
    "client_id": "4",
    "client_secret": "5VTuDW0CESesZobxJoPDlQQ0tb1DVkbC2t3EKXFL",
    "scope": ""
}

# use this response `access_token` as Bearer token
POST http://127.0.0.1:8000/api/portfolios/
Accept: application/json
Authorization: Bearer eyJ0eXAiOiJKV1Q


```