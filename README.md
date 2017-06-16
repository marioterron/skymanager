<a href="https://nodejs.org/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png" width= "64px"></a><a href="https://expressjs.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png" width= "128px"></a><a href="https://www.mongodb.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/mongodb.png" width= "128px"></a><a href="https://www.mongoosejs.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png" width= "128px"></a>

<a href="https://www.w3.org/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/html5-css3-js.png" width= "128px"></a><a href="https://sass-lang.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/sass.png" width= "64px"></a><a href="https://getbootstrap.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/bootstrap.png" width= "64px"></a><a href="https://www.ecma-international.org/ecma-262/6.0/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png" width= "64px"></a><a href="https://jquery.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/jquery.png" width= "128px"></a>

<a href="https://gulpjs.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/gulpjs.png" width= "32px"></a><a href="https://www.npmjs.com/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png" width= "128px"></a><a href="https://bower.io/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/bower.png" width= "64px"></a><a href="https://www.browserify.org/"><img src="https://github.com/MarioTerron/logo-images/blob/master/logos/browserify.png" width= "128px"></a>

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


# [SKY MANAGER](https://marioterron-skymanager.herokuapp.com/)

This repo contains full stack project **SKY MANAGER** in which users can manage a soccer team with real players in a virtual league.

**SKY MANAGER** is made with **Node.js** and **Express.js** for the part of the server, and the client part is made with **AngularJS**.

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3000
  ```

- Mongodb path and database to use:

  ```
  DB_URI=mongodb://localhost:27017/NAME_DB
  ```

- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXXXXXXXXXXXXXX
  ```

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically

## API

The server part has multiple **API endpoints** using several routes:

- `/api` -> Serves the internal data of the users and players.
- `/auth` -> Serves the authentication options, register and login.

## Built with:

- **Front-end**

    - angular: 1.6.4
      - angular-route: 1.6.5
      - angular-jwt: 0.1.9
      - angular-css: 1.0.8,
      - angular-sweetalert: 1.1.2,
    - browserify: 14.4.0
    - gulp: 3.9.1,
    - bower: 1.8.0
    - bootstrap: 3.3.5
    - font-awesome: 4.7.0,
    - icomoon-bower: 0.1.2,
    - jquery: 3.2.1,

- **Back-end**

  - dotenv: 4.0.0
  - express: 4.15.3
    - express-jwt: 5.3.0
  - jsonwebtoken: 7.4.1
  - mongoose: 4.10.5,
    - mongoose-simple-random: 0.4.1,
  - passport: 0.3.2,
    - passport-jwt: 2.2.1,
    - passport-local: 1.0.0,
    - passport-local-mongoose: 4.0.0

## Authors

[Mario Terron](https://github.com/MarioTerron)

## Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa Garrido](https://github.com/juanmaguitar)
- [AlejandroDG](https://github.com/agandia9)
