# AngBasicPractice001Components

## First steps
- `code . -r`
- `npm install`
- `npm start`

## Tasks

### Include Bootstrap into this project
1. Download Bootstrap and Fontawesome with the npm:  
```shell
npm i bootstrap font-awesome
```
1. Open angular.json file
1. Place bootstrap and font-awesome css paths to styles array, before the styles.scss:  
```json
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
```
1. Delete whole content from the app.component.html file.
1. Place a Bootstrap jumbotron and a container to the app.component.html file.
1. Restart the development server:  
ctrl + c
```shell
npm start
```

-------
Hungarian

## Első lépések
- `code . -r`
- `npm install`
- `npm start`

## Feladatok

### Alkalmazd a Bootstrap keretrendszert és a Fontawesome -ot
1. Töltsd le őket az npm segítségével:  
```shell
npm i bootstrap font-awesome
```
1. Nyisd meg az angular.json filet.
1. Helyezd el a styles tömbben a bootstrap és font-awesome elérési útját a 
styles.scss elé:
```json
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
```
1. Töröld az app.component.html teljes tatalmát.
1. Helyezz el egy Bootstrap jumbotront és egy containert az app.component.html 
fileba.
1. Indítsd újra a devservert:  
ctrl + c
```shell
npm start
```
