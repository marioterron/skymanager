const mongoose 	= require('mongoose');
const Player 		= require( __base + 'models/Player');

const Schema 		= mongoose.Schema;

const getAllPlayers = ( req, res ) => {
	Player.find({"owner": Schema.ObjectId("593d66e065d4fab620df195b")})
		.then( players => res.json(players) )
}

module.exports = getAllPlayers
