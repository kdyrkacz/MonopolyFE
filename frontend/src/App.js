import React from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "./pages/Main";
import Board from "./pages/Board";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
