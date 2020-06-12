import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './GameBoard.jsx'

export default class Layout extends Component {

  render() {
    return (
      <div>
        <h1>The Matching Game</h1>
        <GameBoard />
      </div>
    )
  }
}
