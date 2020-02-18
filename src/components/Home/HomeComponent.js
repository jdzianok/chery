import React, { Component } from "react";
import Navigation from "../Navigation/NavigationComponent";
import HeaderComponent from "./HeaderComponent";
import ThreeColumns from "./ThreeColumns";
import SimpleStepsComponent from "./SimpleStepsComponent";
import AboutUsComponent from "./AboutUsComponent";
import PaginationComponent from "./PaginationComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div id="start">
        <Navigation />
        <HeaderComponent />
        <ThreeColumns />
        <SimpleStepsComponent />
        <AboutUsComponent />
        <PaginationComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default HomeComponent;
