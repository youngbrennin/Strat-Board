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
      console.log(event.target.getAttribute("cardID"));
    }

    this.addClick = function() {
      if(props.activePlayer == props.owner == props.loggedInPlayer){
        return this.selectCard
      }
    }

    return <div onClick={this.addClick()} className="card">
      <div cardID={props.id} className="img-container">
        <img className="cardBackground" alt={props.type} src={"/" + props.type + ".png"} />
      </div>
      <div className="content">
        <ul>
          {this.displayDamage()}
        </ul>
      </div>
    </div>
};

   
export default Cards;

