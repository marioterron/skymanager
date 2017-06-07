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
  position: String,
  status: String,
  totalPoints: Number,
  MatchesPlayed: Number,
  avgPoints: Number,
  pointsAsLocal: Number,
  pointsAsVisitor: Number,
  fitness: [String],
  marketValue: Number,
  forSale: { type: Boolean, default: false }
}, { collection })

module.exports = mongoose.model('Player', PlayerSchema);
