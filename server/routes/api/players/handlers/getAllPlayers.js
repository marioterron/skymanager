const Player 		= require( __base + 'models/Player');

module.exports = ( req, res ) => {
	Player.find({"isFromAdmin": true})
		.then( players => res.json(players) )
}
