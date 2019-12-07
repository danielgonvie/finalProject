import React from 'react'
import PageTitle from '../../fontStyles/PageTitle'
import FormWrapper from './CreateGameStyles';
import GameService from '../../services/GameService';
import Game from '../Game/Game';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.gameService = new GameService();
  }

  state = {
    name: '',
    description: '',
    show: false,
    games: null
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = (e) => {
    const { name, description } = this.state;
    e.preventDefault();
    this.gameService.createGame({name, description})
      .then(
        () => {
          this.setState({...this.state, name: '', description: ''})
          this.updateGames()
        },
        (error) => console.error(error))
  }

  displayGames = () => {
    const { games } = this.state;
    // <Game key={i} name={game.name} description={game.description} done={game.done} />
    return games.map((game, i) => <Game key={i} {...game} updateGames={this.updateGames} />)
  }

  componentDidMount() {
    this.updateGames()
  }
  
  updateGames = () => {
    this.gameService.fetchGames()
      .then(
        (games) => {
          this.setState({ ...this.state, games })
        },
        (error) => {
          const { message } = error;
          console.error(message)
        }
      )
  }
  toggleShow = () => {
    const { show } = this.state;
    this.setState({...this.state, show: !show})
  }

  render() {
    const { loggedInUser } = this.props;
    const { name, description, show, games } = this.state;
    return (
      <div>
        <PageTitle color="black">{`Game List from ${loggedInUser.username} (${games ? games.length : 0})`}</PageTitle>
        
        <div className="container">
          <div>
            <img src={loggedInUser.picture} alt=""/>
          </div>
          <button className="show-button" onClick={this.toggleShow}>{show ? 'Hide form' : 'Show form'}</button>
          <FormWrapper onSubmit={this.handleSubmit} show={show}>
            <p>Create game:</p>
            <div>
              <label>Game Name:</label><input type="text" name="name" onChange={this.handleChange} value={name} />
            </div>
            <div>
              <label htmlFor="description">Description:</label> <input type="text" name="description" onChange={this.handleChange} value={description} />
            </div>
            <input type="submit" value="Create" className="submit-button" />
          </FormWrapper>
        </div>
        <div className="games-container">
          {games && this.displayGames()}
          {!games && <p>Loading...</p> }
        </div>
      </div>
    )
  }
}

export default GameList;
