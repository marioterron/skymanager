const Player = require( __base + 'models/Player')

const getRandomGoalkeepers = (req, res) => {
Player.count({position:"PT"}).exec( (err, count) => {
  const random = Math.floor(Math.random() * count)
  Player
		.find({position:"PT"}, {"player.name": 1, "_id":0})
		.skip(random)
		.limit(1)
		.then(players => res.json(players))
	})
}

module.exports = getRandomGoalkeepers
