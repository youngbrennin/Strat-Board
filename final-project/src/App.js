import React, { Component } from 'react';
import Board from "./components/Board";
import Cards from "./components/Cards";
import cards from "./cards.json";
import './App.css';

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      cards
    };
  render() {
    return (
    <div>
    <Board />
    {this.state.cards.map(card => (
    <Cards 
    id={card.id}
    key={card.id}
    name={card.name}
    image={card.image}
    damage={card.damage}
    imageTwo={card.imageTwo}
    />
    ))}
    </div>  
    ) 
  } 
}
export default App;
