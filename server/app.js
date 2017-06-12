const express 			= require('express');
const path 					= require('path');
const bodyParser 		= require('body-parser');

const app 					= express();

const routesPlayers = require('./routes/players');


/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* static folder */
app.use( express.static(path.join(__base,'../client/dist')));

app.use('/api/players', routesPlayers);

module.exports = app;
