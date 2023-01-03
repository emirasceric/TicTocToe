import React from "react";

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
        console.log(i);
      }
    }
}
    return null;
    export default checkWin
