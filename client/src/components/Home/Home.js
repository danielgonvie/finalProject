import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/enter"><img src="./images/joystick.svg" alt="Hi"></img></Link>
        <h1>GAMVAS</h1>
        <p>Welcome to a humble page of games done with canvas!</p>
        
      </div>
    );
  }
}
