import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import cards from "./cards.json";
import Splash from "./components/pages/Splash/Splash";
import Game from "./components/pages/Game/Game";
import MatchMaking from "./components/pages/MatchMaking/MatchMaking";
import './App.css';

class App extends Component {
    // Setting this.state.cards to the cards json array
    state = {
      cards
    };


  render() {
    return (
    
    <Router>
      
    <div>
      <Route exact path="/" component={Splash} />
      <Route exact path="/matchmaking" component={MatchMaking} />
      <Route exact path="/Game/:gameID" component={Game} />
    </div>

    </Router>
  
    ) 
  } 
}
export default App;
