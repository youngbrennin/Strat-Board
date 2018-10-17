import React, { Component } from "react";
import "./Splash.css";
import api from "../../../utils/api";

class Splash extends Component {

  state = {
    loggedIn : false,
    userName : ""
  }

  loginButton = () => {
    if(this.state.loggedIn === false){
      this.loginElement = <span>  
        <p>Welcome to Card Chess!</p>
        <p>Login or Register with:</p>
        <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
        <p className="littleText">Or <a href="/matchmaking">Click here</a> to spectate!</p>
      </span>
    }
    else {
      this.loginElement = <span>Welcome back, {this.state.userName}!<br /><a href="/matchmaking">Proceed to Card Chess!</a><br /><a className="littleText" href="/auth/logout">Not you?</a></span>
    }

    return this.loginElement;
  }
  


  render() {
    return(
      <div>
        
          <div className="bg">
            <div className="login">

              <div className="jumbotron text-center">

                {this.loginButton()}
                

              </div>
            </div>

          </div>
        </div>
    );
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    api.getUserData().then(user => {
        if(user.data){
            this.setState({
              loggedIn : true,
              userName : user.data.name
            });
        }
        else {
            this.setState({loggedIn : false});
        }
    })
}

};

export default Splash;