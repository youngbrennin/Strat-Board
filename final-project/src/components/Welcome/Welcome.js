import React from "react";
import "./Welcome.css";


const Welcome = (props) => {

    let topMessage = "";
    if(props.name === "Anonymous") {
        topMessage = <span>Login or Register with: <a href="auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a></span>
    }
    else {
        topMessage = <span>Welcome back, {props.name}! <a href = "/auth/logout/">Log out</a>
        <span className="rightHead">Wins: {props.winCount} Losses: {props.loseCount}</span></span>
    }


    return(
    <div className="row">
        <div className="col1 s12 m5">
            <div className="card-panel">
                <p className="leftHead">
                    {topMessage}
                </p>
            </div>
        </div>
    </div>
    )
}




export default Welcome;