import React from 'react'
import GameCard from './GameStyles'
import GameService from '../../services/GameService'

export default function Game({ _id, name, description, picture, status, updateGames }) {
  const service = new GameService()
  const toggleGame = () => {
    service.updateGame(_id, !status)
    .then(() => {
      updateGames()
    })
  }
  const deleteGame = () => {
    service.deleteGame(_id)
    .then(() => {
      updateGames()
    })
  }
  return (
    <GameCard status={status} >
      <h3>Game Name: {name}</h3>
      <p>Game Description: {description}</p>
      <img src={picture} alt="Holi"></img>
      <button onClick={toggleGame}>{status ? 'Hide Game' : 'Show Game'}</button>
      <button onClick={deleteGame}>🗑</button>
    </GameCard>
  )
}
