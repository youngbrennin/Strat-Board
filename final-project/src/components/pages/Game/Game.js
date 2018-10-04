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
      return( <Cards name={cards[e].name}/>)
    })
  )
  // <Cards name={cards[e].name} />)
}

render() {
  return (
    <div>
      {/* <h1>Game</h1> */}
      <div class="row">
        <div class="col s6">
          <Board />
          </div>
        <div class="col s6">
      {this.fiveRandomCards(
        <Cards
        id={cards.id}
        key={cards.id}
        name={cards.name}
        image={cards.image}
        damage={cards.damage}
        imageTwo={cards.imageTwo}
        />
        )}
        </div>
        </div>
      {/* {this.state.cards.map(card => (
          <Cards
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            damage={card.damage}
            imageTwo={card.imageTwo}
          />
        ))} */}
    </div>
  );
}
}

export default Game;