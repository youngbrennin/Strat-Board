import React from "react";
import "./ListedGame.css";
import api from "../../utils/api";


const ListedGame = (props) => {

  this.firstPlayer = () => {
    if(props.loggedInUser === props.player1)  {
      return <span>You</span>
    }
    else {
      return <span>{props.player1Name}</span>
    }
  }

  this.joinGame = () => {
    api.joinGame(props.id)
    .then((joined) => {
      if(joined) {console.log(props)
          props.getGames();
          props.getUser();
      }
      else {
          props.getUser();
      }
  });
  }

  this.secondPlayer = () => {console.log(props.loggedInUser, props.player2);
    if(props.loggedInUser === props.player2)  {
      return <span>You</span>
    }
    else if(props.player2 === null && props.loggedInUser !== props.player1 && props.loggedInUser !== "NONE") {
      return <button onClick={this.joinGame} className="join">JOIN</button>
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
