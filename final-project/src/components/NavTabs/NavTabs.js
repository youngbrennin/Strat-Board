import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Splash
      </Link>
    </li>



    <li className="nav-item">
      <Link
        to="/MatchMaking"
        className={
          window.location.pathname === "/MatchMaking" ? "nav-link active" : "nav-link"
        }
      >
        MatchMaking
      </Link>
    </li>

    
    <li className="nav-item">
      <Link
        to="/Game"
        className={
          window.location.pathname === "/Game" ? "nav-link active" : "nav-link"
        }
      >
        Game
      </Link>
    </li>
  </ul>
);

export default NavTabs;
