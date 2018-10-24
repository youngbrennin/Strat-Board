import React from "react";
import "./Cards.css";


const Cards = (props) => {

    this.displayDamage = function() {
      if(props.damage === "???"){
        return
      }
      else {
        return <li>
          <strong>Damage:</strong> {props.damage}
        </li>
      }
    }

    this.selectCard = function(event) {
      let card = props.game.cards[event.target.getAttribute("cardID")];
      if(card){// this is a kludgey workaround for if the object doesn't exist at the moment of click
        let moveList = card.getValidMoves();
        
      }
      else {
        console.log("failed to find card object");
      }
    }

    // pls refactor
    this.addClick = function() {
      if(props.activePlayer == props.owner == props.loggedInPlayer){
        return <div onClick={(event) => {this.selectCard(event)}} className="card">
        <div cardID={props.id} className="img-container">
        <img className="cardBackground" alt={props.type} src={"/" + props.type + ".png"} />
      </div>
      <div className="content">
        <ul>
          {this.displayDamage()}
        </ul>
      </div>
    </div>
      }
      else {
        return <div className="card"><div cardID={props.id} className="img-container">
        <img className="cardBackground" alt={props.type} src={"/" + props.type + ".png"} />
      </div>
      <div className="content">
        <ul>
          {this.displayDamage()}
        </ul>
      </div>
    </div>
      }
    }

    return this.addClick()
      
};

   
export default Cards;

