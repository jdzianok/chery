import React, { Component } from "react";
import Navigation from "../Navigation/NavigationComponent";
import HeaderComponent from "./HeaderComponent";
import ThreeColumns from "./ThreeColumns";
import SimpleStepsComponent from "./SimpleStepsComponent";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div id="start">
        <Navigation />
        <HeaderComponent />
        <ThreeColumns />
        <SimpleStepsComponent />
      </div>
    );
  }
}

export default HomeComponent;
