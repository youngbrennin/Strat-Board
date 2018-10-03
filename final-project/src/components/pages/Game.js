import React, { Component } from "react";
import Board from "../Board/Board";
import Cards from "../Cards/Cards";
import cards from "../../cards.json";



class Game extends Component {
// Setting this.state.cards to the cards json array
  state = {
    cards
};

  
render() {
  return (
    <div>
      <h1>Game</h1>
      <Board />
      {this.state.cards.map(card => (
          <Cards
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            damage={card.damage}
          />
        ))}
    </div>
  );
}
}

export default Game;