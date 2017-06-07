const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getPlayers')

router.get('/', getAll)

module.exports = router
