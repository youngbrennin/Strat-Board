import React, { Component } from "react";
import Board from "../../Board/Board";
import Cards from "../../Cards/Cards";
import Hand from "../../Hand/Hand";
import cards from "../../../cards.json";
import api from "../../../utils/api";
import HPAP from "../../HPAP/HPAP";

const makeGame = require('../../../utils/gameUtils/makeGame');


class Game extends Component {
  state = {
    cardLocations : {
      player1Hand : [],
      player2Hand : [],
      board : {}
    }
  };

  componentDidMount() {
    this.loadGameState();
  }
  
  loadGameState = () => {
    api.getCardGameState(this.props.match.params.gameID).then(res => {
            const game = this.addCardBacks(new makeGame(res.data));
            this.setState(game);
            console.log(this.state)
          })
          .catch(err => console.log(err));
  } 

  addCardBacks = (data) => {
    if(data.cardLocations.player1Hand.length === 0){
      for(let i = 0; i < 5; i++){
        data.cardLocations.player1Hand.push({
          id : 0,
          type : "back",
          damage : "???"
        })
      }
    }
    else if(data.cardLocations.player2Hand.length === 0) {
      for(let i = 0; i < 5; i++){
        data.cardLocations.player1Hand.push({
          id : 0,
          type : "back",
          damage : "???"
        })
      }
    }
    return data;
  }
 
    
    render() {
      return (
        <div>

        <div className="row">
           <div className="col s3">
           <Hand
           cards = {
             this.state.cardLocations.player1Hand} />
            <HPAP
              hp = {this.state.player1HP}
              ap = {this.state.player1AP} />

          </div>
          <div className="col s6">
            <Board />
          </div>
          <div className="col s3">
           <Hand
           cards = {this.state.cardLocations.player2Hand} />
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

 