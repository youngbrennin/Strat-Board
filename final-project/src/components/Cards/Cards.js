import React from "react";
import "./Cards.css";


const Cards = props => (
    <div className="card">
      <div className="img-container">
        <img className="cardBackground" alt={props.name} src={props.image} />
        <img className="cardMove" alt={props.name} src={props.imageTwo} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Damage:</strong> {props.damage}
          </li>
        </ul>
      </div>
    </div>
  );

   
export default Cards;

