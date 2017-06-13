const Player 		= require( __base + 'models/Player');

const getSquadById = ( req, res ) => {
	const { id } = req.params
	console.log(id);
	Player.find({"owner": id})
		.then( players => res.json(players) )
}

module.exports = getSquadById
