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

    this.addClick = function() {
      
    }

    return <div className="card">
      <div className="img-container">
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

