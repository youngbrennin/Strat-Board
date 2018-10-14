import React, { Component } from "react";
import Create from "../../Create/Create";
// import JoinButton from "./Join/Join";
import UserList from "../../UserList/UserList";
import Welcome from "../../Welcome/Welcome";
import api from "../../../utils/api";

class MatchMaking extends Component {

    state = {
        user : {
            id : "",
            name : "Loading...",
            winCount : "",
            loseCount : "",
            activeGame : ""
        },
        player: []
    };

    listing() {
        if (this.state.players.length === 0) return <p>There appears to be no games available. Please create by clicking thre create button below...</p>;

        return <ul>{this.state.players.map(player => <li key={player}>{player}</li>)}</ul>;
    }



    render() {
        return (
            <div>{console.log(this.state.user)}
                <Welcome 
                name = {this.state.user.name}
                winCount = {this.state.user.winCount}
                loseCount = {this.state.user.loseCount} />
                <UserList />
                <Create />
            </div>
        );
    }

    componentDidMount() {
        this.getUserData();
    }
    
    getUserData = () => {
        api.getUserData().then(user => {
            this.setState({user : user.data});
        })
    }
}
// /* // const MatchMaking = () => (
//     <div>
//         <h1>Matchmaking</h1>

//     </div>
// );

// MAKE A GET WITH AXIOS UPON LOADING



// MAKE A POST WITH AXIOS UPON CLICKING CREATE BUTTON


//  */

export default MatchMaking;