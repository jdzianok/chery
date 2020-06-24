import React, { Component } from "react";
import NavigationComponent from "../Navigation/NavigationComponent";
import Stepper from "react-stepper-horizontal";
import Step1 from "./Step_1Component";
import Step2 from "./Step_2Component";
import Step3 from "./Step_3Component";
import Step4 from "./Step_4Component";
import SummaryComponent from "./SummaryComponent";
import SuccessComponent from "./SuccessComponent";

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
    currentStep: 0,
    formStep: 0,
    clothes: false,
    toys: false,
    books: false,
    others: false,
    bags: "",
    location: "",
    kids: false,
    mothers: false,
    homeless: false,
    handicapped: false,
    elderly: false,
    organization: "",
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    hour: "",
    remarks: ""
  };

  handleStep = direction => {
    const { currentStep, formStep } = this.state;
    if (direction === "next" && currentStep <= 2) {
      this.setState({
        currentStep: currentStep + 1,
        formStep: formStep + 1
      });
    } else if (direction === "next" && formStep <= 4) {
      this.setState({
        formStep: formStep + 1
      });
    } else if (direction === "prev" && formStep >= 4) {
      this.setState({
        formStep: formStep - 1
      });
    } else if (direction === "prev" && currentStep >= 1) {
      this.setState({
        currentStep: currentStep - 1,
        formStep: formStep - 1
      });
    } else return;
  };

  showStep = () => {
    const {
      formStep,
      clothes,
      toys,
      books,
      others,
      bags,
      location,
      kids,
      mothers,
      homeless,
      handicapped,
      elderly,
      organization,
      street,
      city,
      postCode,
      phone,
      date,
      hour,
      remarks
    } = this.state;
    const values = {
      clothes,
      toys,
      books,
      others,
      bags,
      location,
      kids,
      mothers,
      homeless,
      handicapped,
      elderly,
      organization,
      street,
      city,
      postCode,
      phone,
      date,
      hour,
      remarks
    };

    if (formStep === 0) {
      return <Step1 values={values} />;
    } else if (formStep === 1) {
      return <Step2 values={values} />;
    } else if (formStep === 2) {
      return <Step3 values={values} />;
    } else if (formStep === 3) {
      return <Step4 values={values} />;
    } else if (formStep === 4) {
      return <SummaryComponent values={values} />;
    } else if (formStep === 5) {
      return <SuccessComponent values={values} />;
    }
  };

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

    return (
      <>
        <NavigationComponent isLogged={this.props.isLogged} />
        <div className="stepper">
          <Stepper
            steps={steps}
            activeStep={currentStep}
            circleLineHeight={"36"}
            size={36}
          />
          {this.showStep()}
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
