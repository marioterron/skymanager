const User = require( __base + 'models/User');

module.exports = ( req, res ) => {
	const { id } = req.params
	User
		.findById(id)
		.populate({path:'squad.players'})
		.then( user => res.json(user) )
}
