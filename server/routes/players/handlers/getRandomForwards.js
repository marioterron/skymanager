const mongoose 	= require('mongoose');
const Player 		= require( __base + 'models/Player');

const Schema 		= mongoose.Schema;

const getRandomForwards = (req, res) => {

Player.count({position:"DL", "owner": {$eq: Schema.ObjectId("593d66e065d4fab620df195b")}}).exec( (err, count) => {
  const random = Math.floor(Math.random() * count)
	const conditions = {position:"DL", "owner": {$eq: Schema.ObjectId("593d66e065d4fab620df195b")}};
	const filter = { "owner": 1, "player.name": 1, "_id":1 }
  Player
		.find(conditions, filter)
		.skip(random)
		.limit(3)
		.then(players =>
			players.map( player => player._id )
		)
		.then(aPlayersIds =>
			aPlayersIds.forEach((playerId) => Player.findByIdAndUpdate(playerId, { "owner": "593e63ce65d4fab620df2080" }, (err, player) => {
				if (err) throw err;
  			console.log(`${player.player.name} has new owner!`)
			}))
		)
		.then( () => res.json({"msg": "Operation success!"}))
	})
}

module.exports = getRandomForwards
