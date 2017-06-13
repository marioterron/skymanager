const express 								= require('express')
const router 									= express.Router()

const getSquadById 						= require('./handlers/getSquadById')

router
	.get('/:id', getSquadById)

module.exports = router
