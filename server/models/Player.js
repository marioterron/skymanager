const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'players'

const PlayerSchema = new mongoose.Schema({
  player: {
    name: { type: String, required: true },
    photo: { type: String, required: true },
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
	owner: { type: Schema.Types.ObjectId, ref: 'User', default: "593d66e065d4fab620df195b" },
  forSale: { type: Boolean, default: false },
	sellValue: Number,
	bets: [
	[{
			user: { type: Schema.Types.ObjectId, ref: 'User' },
			isWinner: { type: Boolean, default: false },
			value: { type: Number, required: true }
	}]
]
}, { collection })

module.exports = mongoose.model('Player', PlayerSchema);
