import React from "react";
import "./Welcome.css";


const Welcome = () => {
    return(
    <div className="row">
        <div className="col1 s12 m5">
            <div className="card-panel">
                <p className="leftHead">Welcome back !
                {/* <p className="leftHead">Welcome back {Account.userName}! */}
              <span className="rightHead">Wins: Losses: </span>
              {/* <span className="rightHead">Wins:{Account.winCount} Losses{Account.loseCount}</span> */}
                </p>
            </div>
        </div>
    </div>
    )
}


export default Welcome;