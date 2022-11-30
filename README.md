# Angular-CRUD-JSON_SERVER

Angular version 15.0.0 [Angular CLI](https://github.com/angular/angular-cli)

## Development server

`git clone https://github.com/mohamedpierre/CRUD-ANGULAR.git`

`cd CRUD-ANGULAR`


### Json Server

***fakeDatabase.json*** : used to store recipes.

to install the JSON Server globally run:

`npm install -g json-server` 

and make sure to run it at: 

`json-server --watch fakeDatabase.json --port 42400`

Run `ng serve -o` for a dev server (-o to open the browser). The app will reload automatically if you change any of the source files.

## Validations

The only component that contains form validations is **api.component**

## Endpoints

if you want to test those endpoints on postman or with cURL (after running the json server):

Base url: **http://localhost:42400/**

Get all recipes:
`GET /recipes`

Get one command(search):
`GET /recipes/:id`
 
Create one command:
`POST /recipes`

Update one command:
`PUT /recipes/:id`

Delete one command:
`DELETE /recipes/:id`

## Application
Ex: **api.component** (http://localhost:4200/api) :
![api component](https://github.com/mohamedpierre/CRUD-ANGULAR/blob/main/docs/api.component.png?raw=true)


Feel free to use it and change it that can suits your needs ^^
