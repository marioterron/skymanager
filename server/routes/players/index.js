const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getPlayers')
const getRandomGoalkeepers = require('./handlers/getRandomGoalkeepers')

router.get('/', getAll)
router.get('/goalkeepers', getRandomGoalkeepers)


module.exports = router
