import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/HomeComponent";

class App extends Component {
  state = { user: null };
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home isLogged={this.state.user} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
