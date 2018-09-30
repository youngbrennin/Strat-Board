import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "./components/Board";
import Cards from "./components/Cards";
import cards from "./cards.json";
import Splash from "./components/pages/Splash.js";
import Game from "./components/pages/Game.js";
import MatchMaking from "./components/pages/MatchMaking.js";
import NavTabs from "./components/NavTabs/NavTabs.js";
import './App.css';

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      cards
    };


  render() {
    return (
    
    <Router>
    <div>
      <Route exact path="/" component={Splash} />
      <Route exact path="/MatchMaking" component={MatchMaking} />
      <Route exact path="/Game" component={Game} />
    </div>

    </Router>
  
    ) 
  } 
}
export default App;
