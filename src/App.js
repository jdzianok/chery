import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import NavigationComponent from "./components/Navigation/NavigationComponent";
import Home from "./components/Home/HomeComponent";
import Register from "./components/Register/RegisterComponent";
import Login from "./components/Login/LoginComponent";
import MultiStepFormComponent from "./components/MultiStepForm/MultiStepFormComponent";
const firebase = require("firebase");

class App extends Component {
  state = { user: null };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({ user: null });
      } else {
        this.setState({ user: user.email });
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <NavigationComponent />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              // component={() => <Home isLogged={this.state.user} />}
            />
            <Route path="/signUp" component={Register} />
            <Route path="/signIn" component={Login} />
            <Route
              path="/stepForm"
              component={() => (
                <MultiStepFormComponent isLogged={this.state.user} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
