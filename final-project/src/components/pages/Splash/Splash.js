import React from "react";
import "./Splash.css";

const Splash = () => (
  <div>
    
      <div className="bg">
        <div className="login">Welcome to Card Chess!

          <div className="jumbotron text-center">
            <p>Welcome to Card Chess!</p>
            <p>Login or Register with:</p>

            
            <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a>

          </div>
          {/* <button className="loginBtn">Login</button> */}
        </div>

      </div>
    </div>


);

export default Splash;