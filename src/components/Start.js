import React from 'react';
import { Link } from "react-router-dom";


function PlayerInput({ setPlayer1, setPlayer2 }) {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p className='player1'>Player 1 Name:</p>
      
      <input type="text"
          placeholder="Enter your name" 
          onChange={e => setPlayer1(e.target.value)} />

      <p className='player2'>Player 2 Name:</p>

      <input type="text"
         placeholder="Enter your name"
         onChange={e => setPlayer2(e.target.value)}/>

      <Link to="/game">

        <button className="Start">
          Start the game
        </button>

      </Link>
    </div>
  );
}

export default PlayerInput;
