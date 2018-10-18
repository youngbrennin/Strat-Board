import React from "react";
import "./HPAP.css";


const HPAP = (props) => (
    <div >
        <p className="HP">HP: {props.hp}</p>
        <p className="AP">AP: {props.ap}</p>
    </div>
  );

   
export default HPAP;
