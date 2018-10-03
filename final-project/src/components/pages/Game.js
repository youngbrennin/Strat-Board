import React from "react";
import Board from "../Board/Board";

const Game = ({match}) => (
    <div>
      <h1>Game</h1>
      Game ID: {match.params.gameID}
      <Board />
    </div>
  );


export default Game;