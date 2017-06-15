const User = require( __base + 'models/User');

module.exports = ( req, res ) => {
	const { id } = req.params
	User
		.findById(id)
		.populate({path:'squad.players'})
		.populate({path:'lineUp.tactic.goalkeeper'})
		.populate({path:'lineUp.tactic.defenders'})
		.populate({path:'lineUp.tactic.midfielders'})
		.populate({path:'lineUp.tactic.forwards'})
		.then( user => res.json(user) )
}
