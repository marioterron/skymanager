const express 								= require('express');
const path 										= require('path');

const routerConfig 						= require('./config/express')
const router 									= require('./routes');

const app 										= express();

app.use(routerConfig)
app.use(router);

module.exports = app;
