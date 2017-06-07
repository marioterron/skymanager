const Player = require( __base + 'models/Player')

function getPlayers( req, res ) {

	Player.find()
		.then( players => res.json(players) )
}

module.exports = getPlayers
