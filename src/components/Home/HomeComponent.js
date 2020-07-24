import React, { Component } from "react";
import NavigationComponent from "../Navigation/NavigationComponent";
import HeaderComponent from "./HeaderComponent";
import ThreeColumnsComponent from "./ThreeColumnsComponent";
import SimpleStepsComponent from "./SimpleStepsComponent";
import AboutUsComponent from "./AboutUsComponent";
import PaginationComponent from "./PaginationComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

class HomeComponent extends Component {
  state = {
    isLogged: false
  };

  render() {
    return (
      <div id="start">
        {/* <NavigationComponent isLogged={this.props.isLogged} /> */}
        <HeaderComponent isLogged={this.props.isLogged} />
        <ThreeColumnsComponent />
        <SimpleStepsComponent isLogged={this.props.isLogged} />
        <AboutUsComponent />
        <PaginationComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default HomeComponent;
