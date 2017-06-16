const express 								= require('express')
const router 									= express.Router()
const passport 								= require(__base + 'config/passport')

const routerPlayers 					= require('./players')
const routerSquad 						= require('./squad')
const routerUser 							= require('./user')
const routerUsers 						= require('./users')

router
	.use(passport.authenticate('jwt', { session: false }))
  .use('/players', routerPlayers)
	.use('/squad', routerSquad)
	.use('/user', routerUser)
	.use('/users', routerUsers)


module.exports = router
