const express 								= require('express')
const router 									= express.Router()
const passport 								= require(__base + 'config/passport')

const routerPlayers 					= require('./players')
const routerSquad 						= require('./squad')

router
	// .use(passport.authenticate('jwt', { session: false }))
  .use('/players', routerPlayers)
	.use('/squad', routerSquad)

module.exports = router
