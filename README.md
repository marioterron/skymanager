[![Node.js](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)  [![Express.js](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com/)  [![MongoDB](https://github.com/MarioTerron/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/) [![Mongoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](https://www.mongoosejs.com/)

[![HTML5, CSS3 and JS](https://github.com/MarioTerron/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)  [![SASS](https://github.com/MarioTerron/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  [![Bootstrap](https://github.com/MarioTerron/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  [![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)  [![jQuery](https://github.com/MarioTerron/logo-images/blob/master/logos/jquery.png)](http://jquery.com/)

[![Gulp](https://github.com/MarioTerron/logo-images/blob/master/logos/gulpjs.png)](http://gulpjs.com/)  [![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)  [![Bower](https://github.com/MarioTerron/logo-images/blob/master/logos/bower.png)](https://bower.io//)  [![Browserify](https://github.com/MarioTerron/logo-images/blob/master/logos/browserify.png)](http://www.browserify.org/)

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

`/api` -> Serves the internal data of the users and players.
`/auth` -> Serves the authentication options, register and login.

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
