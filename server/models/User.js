const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const IMG_URL = /.*\.(gif|jpe?g|bmp|png)$/igm


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, minlength: 2, unique: true },
  banned: {type: Boolean, deafult: false},
  rol: {type: String, enum: ["user", "admin", "mod"], default: "user"},
  picture: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
  gamesLiked: [{type: Schema.Types.ObjectId,ref: "Game"}],
  gamesReported: [{type: Schema.Types.ObjectId,ref: "Game"}],
  gamesPlayed: [{gamePlayed: {type: Schema.Types.ObjectId,ref: "Game"}, timePlayed: {type: Number}}],
  gamesCreated: [{type: Schema.Types.ObjectId,ref: "Game"}],
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User;
