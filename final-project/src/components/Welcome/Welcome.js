import React from "react";
import "./Welcome.css";


const Welcome = (props) => {
    return(
    <div className="row">
        <div className="col1 s12 m5">
            <div className="card-panel">
                <p className="leftHead">
                    Welcome back, {props.name}!
                    <span className="rightHead">Wins: {props.winCount} Losses: {props.loseCount}</span>
                </p>
            </div>
        </div>
    </div>
    )
}


export default Welcome;