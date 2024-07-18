# Angular starter

Angular version 18.0.0 [Angular CLI](https://github.com/angular/angular-cli)

## Development server

`git clone https://github.com/mohamedbirali/angular-starter.git`

`cd angular-starter`

### Json Server

`npm install -g json-server`

run `npm run json-server` to start a json-server on port 42400.

---

last command `npm run start`

The app will reload automatically if you change any of the source files.

## Validations

The only component that contains form validations is **api.component**

## Endpoints

if you want to test those endpoints on postman or with cURL (after running the json server):

Base url: **http://localhost:42400/**

Get all recipes:
`GET /recipes`

Get one recipe(search):
`GET /recipes/:id`

Create one recipe:
`POST /recipes`

Update one recipe:
`PUT /recipes/:id`

Delete one recipe:
`DELETE /recipes/:id`

## Application

Ex: **api.component** (http://localhost:4200/api) :
![api component](https://github.com/mohamedbirali/angular-starter/blob/main/docs/api.component.png?raw=true)

Feel free to use it and change it that can suits your needs ^^
