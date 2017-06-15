const mongoose 											= require('mongoose');
const passportLocalMongoose 				= require('passport-local-mongoose')

const getRandomPlayers 							= require('./handlers/getRandomPlayers')

const Schema 												= mongoose.Schema;


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
			goalkeeper: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		defenders: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		forwards: [ { type: Schema.ObjectId, ref: 'Player' } ],
  		midfielders: [ { type: Schema.ObjectId, ref: 'Player' } ]
  	}
  }]
}, { collection })

UserSchema.plugin(passportLocalMongoose)

UserSchema.pre('save', function(next) {

	// Get squad
	Promise.all([
			getRandomPlayers('PT', 1),
			getRandomPlayers('DF', 5),
			getRandomPlayers('MC', 5),
			getRandomPlayers('DL', 3)
		])
		.then( ([ goalkeepers, defenders, midfielders, forwards ]) => {
			const randomPlayers = [...goalkeepers, ...defenders, ...midfielders, ...forwards]
			this.squad.players = randomPlayers

			// Get default lineup
			const matchweek = 1
			const code = [4,3,3]

			const lineupGoalkeeper = goalkeepers.slice(0,1)
			const lineupDefenders = defenders.slice(0,code[0])
			const lineupMidfielders = midfielders.slice(0,code[1])
			const lineupForwards = forwards.slice(0,code[2])

			this.lineUp.push({ matchweek })
			this.lineUp[0].tactic = { code, goalkeeper: lineupGoalkeeper, defenders: lineupDefenders, midfielders: lineupMidfielders, forwards: lineupForwards }
      next();
		} )
})

module.exports = mongoose.model('User', UserSchema);
