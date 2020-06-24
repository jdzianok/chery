import React, { Component } from "react";
import NavigationComponent from "../Navigation/NavigationComponent";
import Stepper from "react-stepper-horizontal";

class MultiStepFormComponent extends Component {
  state = {
    steps: [
      {
        title: "Wybierz rzeczy"
      },
      {
        title: "Spakuj je w worki"
      },
      {
        title: "Wybierz fundację"
      },
      {
        title: "Zamów kuriera"
      }
    ],
    currentStep: 0
  };

  handleStep(direction) {
    const { currentStep } = this.state;
    if (direction === "next" && currentStep <= 2) {
      this.setState({
        currentStep: currentStep + 1
      });
    } else if (direction === "prev" && currentStep >= 1) {
      this.setState({
        currentStep: currentStep - 1
      });
    } else return;
  }

  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = {
      background: "#E0E0E0",
      width: 200,
      padding: 16,
      textAlign: "center",
      margin: "0 auto",
      marginTop: 32
    };
    console.log(this.state.currentStep);
    return (
      <>
        <NavigationComponent isLogged={this.props.isLogged} />
        <p className="stepForm">MultiStepFormComponent</p>
        <div className="stepper">
          <Stepper
            steps={steps}
            activeStep={currentStep}
            circleLineHeight={"36"}
            size={36}
          />
          <button style={buttonStyle} onClick={() => this.handleStep("prev")}>
            Prev
          </button>
          <button style={buttonStyle} onClick={() => this.handleStep("next")}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default MultiStepFormComponent;
