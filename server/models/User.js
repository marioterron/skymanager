const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'users'

const UserSchema = new Schema({
  username: { type: String, required: true },
  mail: String,
	totalPoints: { type: Number, default: 0 },
  squad: {
    players: [ { type: Schema.Types.ObjectId, ref: 'Player' } ]
  },
  lineUp: [{
  	matchweek: Number,
  	tactic: {
  		code: [ Number ],
  		defenders: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		forwards: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		goalkeeper: [ { type: Schema.Types.ObjectId, ref: 'Player' } ],
  		midfielders: [ { type: Schema.Types.ObjectId, ref: 'Player' } ]
  	}
  }]
}, { collection })

module.exports = mongoose.model('User', UserSchema);
