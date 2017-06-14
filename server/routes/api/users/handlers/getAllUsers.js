const User = require( __base + 'models/User');

module.exports = ( req, res ) => {
	User
		.find()
		.populate({path:'squad.players'})
		.then( user => res.json(user) )
}
