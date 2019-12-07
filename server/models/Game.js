const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const IMG_URL = /.*\.(gif|jpe?g|bmp|png)$/igm


const gameSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, minlength: 2 },
  picture: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
  url: {type: String},
  activeUsers: {type: Number},
  category:{
    type: String,
    enum: ["solo","online"],
    required: true
  },
  tags:[String],
  likedBy: [{type: Schema.Types.ObjectId,ref: "User"}],
  reportedBy: [{type: Schema.Types.ObjectId,ref: "User"}],
  createdBy: String,
  active: {type: Boolean, deafult: false},
  keyboard: Boolean,
  mouse: Boolean
}, {
  timestamps: true,
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
