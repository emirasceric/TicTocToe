import React, { useState } from 'react';
import "../App.css";


function Game({player1, player2}) {

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);


  function handleMove(row, col) {
    if (board[row][col] || winner) {
      // ako je ćelija već označena ili imamo pobjednika, ne radimo ništa
      return;
    }
    const newBoard = board.map(arr => arr.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    const newWinner = checkWin(newBoard, player1, player2);
    if (newWinner) {
      setWinner(newWinner);


      if (newWinner === "X") {
        setPlayer1Score(player1Score + 1);
      } else if (newWinner === "O") {
        setPlayer2Score(player2Score + 1);
      }

    }
  }

  function resetBoard() {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <div className="game">
      {winner ? (
        <div>
          <p className='pobjednikJe'>Pobjednik je {winner === "X" ? player1 : player2 }</p>
          <button className='igrajPonovo' onClick={resetBoard}>Igraj ponovo</button>
        </div>
      ) : (
      
        <div>

          <p className='naPotezuJe'> Na potezu je {currentPlayer === "X" ? player1 : player2}</p>
          {board.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((cell, cellIndex) => (

                <button className='kocka'
                  key={cellIndex}
                  onClick={() => handleMove(rowIndex, cellIndex)}
                >
                  {cell || " "}
                </button>

              ))}
            </div>
          ))}
        </div>
      )}

<div className='rezultat'>
     
     <p>{player1}: {player1Score}</p>
     <p>{player2}: {player2Score}</p>
  </div>
          

    </div>
  );
}

function checkWin(board) {
  // check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
      }
      }
      
      // check columns
      for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
      }
      }
      
      // check diagonals
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
      }
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
      }
      
      // check for a tie
      let emptyCells = 0;
      for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
      emptyCells++;
      }
      }
      }
      if (emptyCells === 0) {
      return "Neriješeno";
      }
      
      // no win or tie
      return null;
      }
      
      export default Game;
