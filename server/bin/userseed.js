// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/projectServer', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "dani",
    password: bcrypt.hashSync("dani", bcrypt.genSaltSync(bcryptSalt)),
    email: "user.email@gmail.com",
    picture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Sad_face.svg",
    gamesLiked: [],
    gamesReported: [],
    gamesPlayed:[]
  },
  {
    username: "daniel",
    password: bcrypt.hashSync("daniel", bcrypt.genSaltSync(bcryptSalt)),
    email: "admin.email@gmail.com",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Yellow_Happy.jpg/1024px-Yellow_Happy.jpg",
    gamesLiked: [],
    gamesReported: [],
    gamesPlayed:[]
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})