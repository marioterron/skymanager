const Player 		= require( __base + 'models/Player');

module.exports = ( req, res ) => {
	const { id } = req.params
	Player
		.find({"owner": id})
		.then( players => res.json(players) )
}
