import axios from 'axios';

class GameService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/games`,
      withCredentials: true
    })
  }

  fetchGames = () => {
    return this.instance.get('/')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  fetchOneGame = (_id) => {
    return this.instance.get(`/${_id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  createGame = (game) => {
    return this.instance.post('/new', game)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  updateGame = (game) => {
    return this.instance.put(`/${game._id}`, game)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  deleteGame = (_id) => {
    return this.instance.delete(`/${_id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }
}

export default GameService;


