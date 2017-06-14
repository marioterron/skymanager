const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const randomMongoose = require('mongoose-simple-random');

const collection = 'players'

const PlayerSchema = new mongoose.Schema({
  player: {
    name: { type: String, required: true },
    photo: { type: String, required: true, default: "http://statics.laliga.es/apps/fantasy/fantasy_sin_imagen_320.png" },
  },
  team: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  position: { type: String, required: true },
  status: { type: String, default: "Alineable" },
  totalPoints: { type: Number, default: 0 },
  avgPoints: { type: Number, default: 0 },
  pointsAsLocal: { type: Number, default: 0 },
  pointsAsVisitor: { type: Number, default: 0 },
  fitness: [String],
  marketValue: { type: Number, required: true },
	owner: { type: Schema.ObjectId, ref: 'User' },
	isFromAdmin: { type: Boolean, default: true },
  forSale: { type: Boolean, default: false },
	sellValue: Number,
	bets: [
	[{
			user: { type: Schema.ObjectId, ref: 'User' },
			isWinner: { type: Boolean, default: false },
			value: { type: Number, required: true }
	}]
]
}, { collection })

PlayerSchema.plugin(randomMongoose)

module.exports = mongoose.model('Player', PlayerSchema);
