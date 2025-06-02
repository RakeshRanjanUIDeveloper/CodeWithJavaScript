import React from 'react'
import Board from './Board'

const TicTacToe = () => {
  return (
    <React.Fragment>
       <Board />
       <h2>Winner is </h2>
       <button>Reset Game</button>
    </React.Fragment>
  )
}

export default TicTacToe