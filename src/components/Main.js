import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import GamesPage from "./GamesPage";

export default function Main() {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/games" component={GamesPage} />
      </div>
    </Router>
  );
}
