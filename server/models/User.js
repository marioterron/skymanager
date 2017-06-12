const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'users'

const UserSchema = new Schema({
  username: { type: String, required: true },
  mail: String,
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

module.exports = mongoose.model('User', UserSchema);
