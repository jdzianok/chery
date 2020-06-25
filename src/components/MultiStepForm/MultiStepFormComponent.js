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
    other: false,
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
    remarks: "",
    step1Error: "",
    step2Error: ""
  };

  isValidStep1 = () => {
    const { clothes, toys, books, other } = this.state;
    this.setState({
      step1Error: ""
    });

    if (clothes || toys || books || other) {
      return true;
    } else return false;
  };

  isValidStep2 = () => {
    const { bags } = this.state;
    this.setState({
      step2Error: ""
    });

    if (bags) {
      return true;
    } else return false;
  };

  handleNextStep = () => {
    const { currentStep, formStep } = this.state;
    if (currentStep === 0 && this.isValidStep1()) {
      this.setState({
        currentStep: currentStep + 1,
        formStep: formStep + 1
      });
    } else if (!this.isValidStep1()) {
      this.setState({
        step1Error: "Musisz wybrać chociaż jedną opcję"
      });
    } else if (currentStep === 1 && this.isValidStep2()) {
      this.setState({
        currentStep: currentStep + 1,
        formStep: formStep + 1
      });
    } else if (!this.isValidStep2()) {
      this.setState({
        step2Error: "Musisz wybrać chociaż jedną opcję"
      });
    }
  };

  handlePrevStep = () => {
    const { currentStep, formStep } = this.state;
    if (formStep >= 4) {
      this.setState({
        formStep: formStep - 1
      });
    } else if (currentStep >= 1) {
      this.setState({
        currentStep: currentStep - 1,
        formStep: formStep - 1
      });
    } else return;
  };

  handleStep = direction => {
    const { currentStep, formStep } = this.state;
    if (direction === "next" && formStep === 4) {
      this.setState({
        formStep: formStep + 1
      });
    } else if (direction === "next" && currentStep <= 2) {
      this.setState({
        currentStep: currentStep + 1,
        formStep: formStep + 1
      });
    } else if (direction === "next" && formStep < 5) {
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

  handleChange = input => e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [input ? input : e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  handleSwitchClear = () => {
    console.log("dziala");
  };

  renderStep = () => {
    const {
      formStep,
      clothes,
      toys,
      books,
      other,
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
      remarks,
      step1Error,
      step2Error
    } = this.state;
    const values = {
      clothes,
      toys,
      books,
      other,
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
      remarks,
      step1Error,
      step2Error
    };

    if (formStep === 0) {
      return <Step1 handleChange={this.handleChange} values={values} />;
    } else if (formStep === 1) {
      return <Step2 handleChange={this.handleChange} values={values} />;
    } else if (formStep === 2) {
      return <Step3 handleChange={this.handleChange} values={values} />;
    } else if (formStep === 3) {
      return <Step4 handleChange={this.handleChange} values={values} />;
    } else if (formStep === 4) {
      return <SummaryComponent values={values} />;
    } else if (formStep === 5) {
      return <SuccessComponent handleSwitchClear={this.handleSwitchClear} />;
    }
  };

  render() {
    const { steps, currentStep, formStep } = this.state;
    const nextSendBtn = formStep === 4 ? "Wyślij" : "Dalej";

    return (
      <>
        <NavigationComponent isLogged={this.props.isLogged} />
        <div className="stepper">
          <Stepper
            steps={steps}
            activeStep={currentStep}
            circleLineHeight={"36"}
            size={36}
            activeColor="#0166eb"
            completeColor="#0166eb"
          />
          <section className="formContainer">
            {this.renderStep()}
            <div className="formContainer__formBtnContainer">
              <button
                className="formContainer__prevBtn"
                onClick={this.handlePrevStep}
              >
                Wróć
              </button>
              <button
                className="formContainer__nextBtn"
                onClick={this.handleNextStep}
              >
                {nextSendBtn}
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default MultiStepFormComponent;
