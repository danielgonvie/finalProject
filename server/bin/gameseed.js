// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const Game = require("../models/Game");



mongoose
  .connect('mongodb://localhost/projectServer', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let games = [
  {
    name: "Game Active Solo KB",
    description: "Un juego estilo runner que te recordará al dinosaurio de chrome",
    picture: "https://www.pdvg.it/wp-content/uploads/2016/07/metal-slug-anthology.jpg",
    url: "https://danielgonvie.github.io/GameProject/",
    category: "solo",
    tags: ["runner", "skill"],
    createdBy: "daniel",
    active: true,
    keyboard: true,
  },
  {
    name: "Game Pending Solo KB",
    description: "Un juego estilo runner que te recordará al dinosaurio de chrome",
    picture: "https://www.pdvg.it/wp-content/uploads/2016/07/metal-slug-anthology.jpg",
    url: "https://danielgonvie.github.io/GameProject/",
    category: "solo",
    tags: ["runner", "skill"],
    createdBy: "daniel",
    active: false,
    keyboard: true,
  },
  {
    name: "Game Active Online Mouse",
    description: "Un juego estilo runner que te recordará al dinosaurio de chrome",
    picture: "https://www.pdvg.it/wp-content/uploads/2016/07/metal-slug-anthology.jpg",
    url: "https://danielgonvie.github.io/GameProject/",
    category: "online",
    tags: ["runner", "skill"],
    createdBy: "daniel",
    active: true,
    mouse: true,
  },
  {
    name: "Game Active Online Mouse Keyboard",
    description: "Un juego estilo runner que te recordará al dinosaurio de chrome",
    picture: "https://www.pdvg.it/wp-content/uploads/2016/07/metal-slug-anthology.jpg",
    url: "https://danielgonvie.github.io/GameProject/",
    category: "online",
    tags: ["runner", "skill"],
    createdBy: "daniel",
    active: true,
    keyboard: true,
    mouse: true,
  }
]

Game.deleteMany()
.then(() => {
  return Game.create(games)
})
.then(gamesCreated => {
  console.log(`${gamesCreated.length} users created with the following id:`);
  console.log(gamesCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})