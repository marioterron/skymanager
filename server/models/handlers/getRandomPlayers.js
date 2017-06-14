const Player = require( __base + 'models/Player');

function getRandomPlayers( position, limit ) {

	const isFromAdmin = true
	const conditions = { position, isFromAdmin };

  return new Promise( function(resolve, reject) {
	  Player.findRandom(conditions, {}, { limit } , function(err, players) {
	  	if (err) throw err;
			const idsPlayers = players.map( player => player._id )
			resolve(idsPlayers)
		})
  })
}

module.exports = getRandomPlayers
