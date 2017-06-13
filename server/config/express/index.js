const express 			= require('express');
const path 					= require('path');
const bodyParser 		= require('body-parser');

const router 				= express.Router();

// static files
router.use( express.static(path.join(__base,'../client/dist')));

// reception of data to req.body
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


module.exports = router
