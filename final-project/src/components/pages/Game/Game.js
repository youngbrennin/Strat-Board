import React, { Component } from "react";
import Board from "../../Board/Board";
import Cards from "../../Cards/Cards";
import cards from "../../../cards.json";
import api from "../../../utils/api";
import HPAP from "../../HPAP/HPAP";

const makeGame = require('../../../utils/gameUtils/makeGame');


class Game extends Component {
  state = {};

  componentDidMount() {
    this.loadGameState();
  }
  
  loadGameState = () => {
    api.getCardGameState(this.props.match.params.gameID).then(res => {
            this.setState(new makeGame(res.data));
            console.log(this.state)
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
            <HPAP
              hp = {this.state.player1HP}
              ap = {this.state.player1AP} />

          </div>
          <div className="col s6">
            <Board />
          </div>
          <div className="col s3">
            {this.CardsInHand()}
            <HPAP 
              hp = {this.state.player2HP}
              ap = {this.state.player2AP} /> 

          </div>
          </div>
 
      </div>
    );
  }
}

export default Game;

 