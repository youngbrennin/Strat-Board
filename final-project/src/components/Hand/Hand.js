import React from "react";
import Cards from "../Cards/Cards";
import "./Hand.css";

const Hand = (props) => {
  
  this.showCards = () => {
    return props.cards.map((card) => {
      return <Cards
      key = {card.id}
      type = {card.type}
      damage = {card.damage} />
    })
  }

  return <div>
    {this.showCards()}
  </div>
}

   
export default Hand;
