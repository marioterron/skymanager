const express 			= require('express');
const path 					= require('path');
const bodyParser 		= require('body-parser');

const app 					= express();

const routesPlayers = require('./routes/players');
const routesSquad = require('./routes/squad');



/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* static folder */
app.use( express.static(path.join(__base,'../client/dist')));

app.use('/api/players', routesPlayers);
app.use('/api/squad', routesSquad);


module.exports = app;
