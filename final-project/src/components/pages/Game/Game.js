import React, { Component } from "react";
import Board from "../../Board/Board";
import Cards from "../../Cards/Cards";
import cards from "../../../cards.json";



class Game extends Component {
// Setting this.state.cards to the cards json array
  state = {
    cards,
    fiverandomcards:[]
};


shuffle = () => {
  console.log("Shuffling...");
  const cards = this.state.cards;
  for (var i = 0; i < cards.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (cards.length - i));
    var temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
}

fiveRandomCards = () => {
  var randomArray = [];
  for (var i = 0; i < 5; i++){
    var random = Math.floor(Math.random() * (16 - i));
    // this.setState({fiverandomcards:[random]})
    // console.log(this.state.fiverandomcards);
  randomArray.push(random);
  }
  console.log(randomArray);
  // this.setState({fiverandomcards:[random]})
  // console.log(this.state.fiverandomcards);
  return(
    randomArray.map(e=>{
      return( <Cards name={cards[e].name} damage={cards[e].damage} image={cards[e].image} imageTwo={cards[e].imageTwo} />)
    })
  )
  // <Cards name={cards[e].name} />)
}

render() {
  return (
    <div>
      {/* <h1>Game</h1> */}
      <div className="row">
        <div className="col s5">
          <Board />
          </div>
        <div className="col s7">
      {this.fiveRandomCards()}
        </div>
        </div>
      {/* {/* {this.state.cards.map(card => ( */}

    </div>
  );
}
}

export default Game;