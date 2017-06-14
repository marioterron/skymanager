const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const getRandomPlayers = require('./handlers/getRandomPlayers')

const collection = 'users'

const UserSchema = new Schema({
  username: { type: String, required: true },
  mail: String,
	profileImg: { type: String, default: 'http://statics.laliga.es/apps/fantasy/fantasy_sin_imagen_320.png'},
	totalPoints: { type: Number, default: 0 },
  squad: {
    players: [ { type: Schema.ObjectId, ref: 'Player' } ]
  },
  lineUp: [{
  	matchweek: Number,
  	tactic: {
  		code: [ Number ],
  		defenders: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		forwards: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		goalkeeper: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		midfielders: [ { type: Schema.ObjectId, ref: 'Player' } ]
  	}
  }]
}, { collection })

UserSchema.plugin(passportLocalMongoose)

UserSchema.pre('save', function(next) {

	Promise.all([
			getRandomPlayers('PT', 1),
			getRandomPlayers('DF', 5),
			getRandomPlayers('MC', 5),
			getRandomPlayers('DL', 3)
		])
		.then( ([ goalkeepers, defenders, midfielders, forwards ]) => {
			const randomPlayers = [...goalkeepers, ...defenders, ...midfielders, ...forwards]
			this.squad.players = randomPlayers
			this.save()
		} )

	// const matchweek = 1
	// const tactic = { code: [4,3,3] }

	// this.lineUp.push({ matchweek, tactic })
	next();
})

module.exports = mongoose.model('User', UserSchema);
