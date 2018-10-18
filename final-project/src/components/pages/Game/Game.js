import React, { Component } from "react";
import Board from "../../Board/Board";
import Cards from "../../Cards/Cards";
import cards from "../../../cards.json";
import api from "../../../utils/api";
import HPAP from "../../HPAP/HPAP";


class Game extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    CardsInHand: [],
    deck: [],
    hand: [],

  };

  componentDidMount() {
    this.loadGameState();
  }
  
  loadGameState = () => {
    // console.log('loadGameState fired');
    // console.log(this.props);
    api.getCardGameState(this.props.match.params.gameID).then(res => {
            console.log(res); 
            // this.setState({ deck: res.data });
            this.setState(res.data);
            console.log(this.state);      
          })
          .catch(err => console.log(err));
  } 


CardsInHand = () => {
    var hand = [];
    for (var i = 0; i < 5; i++) {
      var random = Math.floor(Math.random() * (16 - i));
      
      hand.push(random);
    }
    console.log(hand);
    
    return (
      hand.map(e => {
        return (<Cards name={cards[e].name} damage={cards[e].damage} image={cards[e].image} />)
      })
      )
    }

  
    
    render() {
      return (
        <div>

        <div className="row">
           <div className="col s3">
            {this.CardsInHand()}
            <HPAP hp={this.state.player1hp} ap={this.state.player1ap}/>

          </div>
          <div className="col s6">
            <Board />
          </div>
          <div className="col s3">
            {this.CardsInHand()}
            <HPAP hp={this.state.player2hp} ap={this.state.player2ap} /> 

          </div>
          </div>
 
      </div>
    );
  }
}

export default Game;

  {/* // shuffle = () => {
  //   console.log("Shuffling...");
  //   const cards = this.state.cards;
  //   for (var i = 0; i < cards.length - 1; i++) {
  //     var j = i + Math.floor(Math.random() * (cards.length - i));
  //     var temp = cards[j];
  //     cards[j] = cards[i];
  //     cards[i] = temp;
  //   }
  // } */}