import React, { Component } from "react";
import Navigation from "../Navigation/NavigationComponent";
import HeaderComponent from "./HeaderComponent";
import ThreeColumns from "./ThreeColumns";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div id="start">
        <Navigation />
        <HeaderComponent />
        <ThreeColumns />
      </div>
    );
  }
}

export default HomeComponent;
