import React from "react";
import Cards from "../Cards/Cards";
import "./Hand.css";

const Hand = (props) => {
  
  this.showCards = () => {
    return props.cards.map((card) => {
      return <Cards
      key = {card.id}
      id = {card.id}
      owner = {card.owner}
      type = {card.type}
      damage = {card.damage}
      activePlayer = {props.activePlayer}
      loggedInPlayer = {props.loggedInPlayer}
      game = {props.game} />
    })
  }

  return <div>
    {this.showCards()}
  </div>
}

   
export default Hand;
