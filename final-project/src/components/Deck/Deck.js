import React, { Component } from "react";

import "./Deck.css";
import Cards from "../Cards/Cards";
import cards from "../../cards.json";

// Object that handles the player deck
// deck.drawCard() - gets cards for this deck in the Cards table, randomizes them, and returns them.
// class Deck extends Component {

//   state = {
//     cards,
//     fiverandomcards: []
//   };


//   shuffle = () => {
//     console.log("Shuffling...");
//     const cards = this.state.cards;
//     for (var i = 0; i < cards.length - 1; i++) {
//       var j = i + Math.floor(Math.random() * (cards.length - i));
//       var temp = cards[j];
//       cards[j] = cards[i];
//       cards[i] = temp;
//     }
//   }

//   fiveRandomCards = () => {
//     var randomArray = [];
//     for (var i = 0; i < 5; i++) {
//       var random = Math.floor(Math.random() * (16 - i));

//       randomArray.push(random);
//     }
//     console.log(randomArray);

//     return (
//       randomArray.map(e => {
//         return (<Cards name={cards[e].name} damage={cards[e].damage} image={cards[e].image} imageTwo={cards[e].imageTwo} />)
//       })
//     )
//   }
// }
// export default Deck;