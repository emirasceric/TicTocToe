import React, { useState } from 'react';
import Game from './components/Tictactoe';
import PlayerInput from './components/Start';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <Routes>
      <Route path="/game" element={<Game player1={player1} player2={player2} />} />
      <Route path="/" element={<PlayerInput setPlayer1={setPlayer1} setPlayer2={setPlayer2} />} />
    </Routes>
  );
}

export default App;
