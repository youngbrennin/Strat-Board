import React from "react";
import Board from "../Board/Board";

const Game = ({match}) => (
    <div>
      <h1>Game</h1>
      Game ID: {match.params.gameID}
    </div>
  );


export default Game;