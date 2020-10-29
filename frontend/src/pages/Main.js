import React from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";

function Main() {
  return (
    <div className="Main">
      Hello there, this is the Main page Find startup settings for the monopoly
      game here. Options like player count, round length etc.
      <Link to="/board">
        <button>Go to game board</button>
      </Link>
    </div>
  );
}

export default Main;
