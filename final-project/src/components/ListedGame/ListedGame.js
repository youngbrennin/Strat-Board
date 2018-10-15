import React from "react";
import "./ListedGame.css";


const ListedGame = (props) => {

  this.firstPlayer = () => {
    if(props.loggedInUser === props.player1)  {
      return <span>You</span>
    }
    else {
      return <span>{props.player1Name}</span>
    }
  }

  this.secondPlayer = () => {
    if(props.loggedInUser === props.player2)  {
      return <span>You</span>
    }
    else if(props.player2 === null && props.loggedInUser !== props.player1 && props.loggedInUser !== "NONE") {
      return <a href={"/api/join/" + props.id}><button className="join">JOIN</button></a>
    }
    else if(props.player2 !== null) {
      return <span>{props.player2Name}</span>
    }
    else {
      return <span>Awaiting Challenger</span>
    }
  }

  this.spectate = () => {
    if(props.loggedInUser !== props.player1 && props.loggedInUser !== props.player2)  {
      return <a href={"/game/" + props.id}><button className="spectate">SPECTATE</button></a>
    }
    else {
      return <a href={"/game/" + props.id}><button className="spectate">RESUME!</button></a>
    }
  }

  return <div>
    <div className="row">
        <div className="col s8 offset-s2">
            <div className="card-panel">
                <p>
                {this.firstPlayer()} Vs.&nbsp;
                {this.secondPlayer()}
                {this.spectate()}
                </p>
            </div>
        </div>
    </div>
    
  </div>
};

   
export default ListedGame;
