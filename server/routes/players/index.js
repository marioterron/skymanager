const express = require('express')
const router = express.Router()

const getAllPlayers 					= require('./handlers/getAllPlayers')
const getRandomGoalkeepers 		= require('./handlers/getRandomGoalkeepers')
const getRandomDefenders 			= require('./handlers/getRandomDefenders')
const getRandomMidfielders 		= require('./handlers/getRandomMidfielders')
const getRandomForwards 			= require('./handlers/getRandomForwards')

router.get('/', getAllPlayers)
router.get('/goalkeepers', getRandomGoalkeepers)
router.get('/defenders', getRandomDefenders)
router.get('/midfielders', getRandomMidfielders)
router.get('/forwards', getRandomForwards)

module.exports = router
