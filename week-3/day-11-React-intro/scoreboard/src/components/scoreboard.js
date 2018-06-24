import React, { PureComponent } from 'react'
import Player from './player'
import AddPlayer from './addPlayer'
//need to finish this one

export default class Scoreboard extends PureComponent {
  state = {
    players: [
      {
        name: 'Jelena',
        score: 2,
        id: 1
      },
      {
        name: 'Milos',
        score: 0,
        id: 2
      },
      {
        name: 'Nevena',
        score: 0,
        id: 3
      }
    ]
  }

  updatePlayerScore = (id, score) => {
    const updatedPlayers = this.state.players.map(
      player => {
        if (player.id === id) {
          return {
            ...player,
            score
          }
        }
        else {
          return player
        }
      }
    )
    this.setState({ players: updatedPlayers })
  }

  render() {
    return (
      <div className="Scoreboard">
        <h1>Scoreboard</h1>
        <h3>
          {this.state.players.map(player => <Player name={player.name} score={player.score} key={player.id}/>)}
        </h3>
        <AddPlayer />
      </div>
    )
  }
}
