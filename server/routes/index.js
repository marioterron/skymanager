const express 								= require('express')
const router 									= express.Router()

const routerApi 							= require('./api')
const routerAuth 							= require('./auth')

router
	.use('/auth', routerAuth)
  .use('/api', routerApi)

module.exports = router
