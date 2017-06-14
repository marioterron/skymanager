const express 								= require('express')
const router 									= express.Router()

const getAllUsers 						= require('./handlers/getAllUsers')

router
	.get('/', getAllUsers)

module.exports = router
