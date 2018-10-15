import React, { Component } from "react";
import Create from "../../Create/Create";
import Welcome from "../../Welcome/Welcome";
import api from "../../../utils/api";
import ListedGame from "../../ListedGame";

class MatchMaking extends Component {

    state = {
        user : {
            id : "NONE",
            name : "Anonymous",
            winCount : "",
            loseCount : "",
            activeGame : 0
        },
        games: {}
    };

    showGames() {
        if (this.state.games[0] === undefined) return <p>There do not appear to be any available games at this time. Please create by clicking the create button below...</p>;

        const listofGames = this.state.games.map((game) => {
            return <ListedGame
            key = {game.id}
            id = {game.id}
            player1 = {game.player1}
            player1Name = {game.player1Name}
            player2 = {game.player2}
            player2Name = {game.player2Name}
            loggedInUser = {this.state.user.id}
            getGames = {this.getGames}
            getUser = {this.getUserData} />
        });
        return listofGames
    }

    showCreate() {
        if(this.state.user.id !== "NONE" && this.state.user.activeGame == 0) {
            return <Create
            getGames = {this.getGames}
            getUser = {this.getUserData} />
        }
    }

    render() {
        return (
            <div>
                <Welcome 
                name = {this.state.user.name}
                winCount = {this.state.user.winCount}
                loseCount = {this.state.user.loseCount} />
                {this.showGames()}
                {this.showCreate()}
            </div>
        );
    }

    componentDidMount() {
        this.getUserData();
        this.getGames();
    }
    
    getUserData = () => {
        api.getUserData().then(user => {
            if(user.data){
                this.setState({user : user.data});
            }
            else {
                this.setState({user : {
                    name : "Anonymous",
                    id : "NONE"
                }});
            }
        })
    }

    getGames = () => {
        api.getGames()
            .then(gamesList => {
                this.setState({
                    user : this.state.user,
                    games : gamesList.data
                })
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