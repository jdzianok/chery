import React, { Component } from "react";
import Stepper from "react-stepper-horizontal";
import Step1 from "./Step_1Component";
import Step2 from "./Step_2Component";
import Step3 from "./Step_3Component";
import Step4 from "./Step_4Component";
import SummaryComponent from "./SummaryComponent";
import SuccessComponent from "./SuccessComponent";
import { withRouter } from "react-router-dom";

const startDate = new Date().toISOString().slice(0, 10);
const initialState = {
  steps: [
    {
      title: "Rzeczy"
    },
    {
      title: "Ilość"
    },
    {
      title: "Cel"
    },
    {
      title: "Kurier"
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
  date: startDate,
  hour: "",
  remarks: "",
  step1Error: "",
  step2Error: "",
  step3Error: "",
  step4ErrorStreet: "",
  step4ErrorCity: "",
  step4ErrorPostCode: "",
  step4ErrorPhone: "",
  step4ErrorHour: ""
};

class MultiStepFormComponent extends Component {
  state = initialState;

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

  isValidStep3 = () => {
    const { location } = this.state;
    this.setState({
      step3Error: ""
    });

    if (location) {
      return true;
    } else return false;
  };

  isValidStep4 = () => {
    const { street, city, postCode, phone, hour } = this.state;
    this.setState({
      step4ErrorStreet: "",
      step4ErrorCity: "",
      step4ErrorPostCode: "",
      step4ErrorPhone: "",
      step4ErrorHour: ""
    });

    let step4ErrorStreet = "";
    let step4ErrorCity = "";
    let step4ErrorPostCode = "";
    let step4ErrorPhone = "";
    let step4ErrorHour = "";

    if (street.trim().length <= 3) {
      step4ErrorStreet = "Ulica powinna zawierać co najmniej 3 znaki";
    }
    if (city.trim().length <= 3) {
      step4ErrorCity = "Miasto powinno zawierać co najmniej 3 znaki";
    }
    if (!postCode.match(/^\d\d-\d\d\d$/)) {
      step4ErrorPostCode = "Podaj poprawny kod pocztowy";
    }
    if (phone.trim().length < 9 || phone.trim().length > 12) {
      step4ErrorPhone = "Wpisz np. 555 555 555";
    }
    if (!hour) {
      step4ErrorHour = "Podaj godzinę";
    }

    if (
      step4ErrorStreet ||
      step4ErrorCity ||
      step4ErrorPostCode ||
      step4ErrorPhone ||
      step4ErrorHour
    ) {
      this.setState({
        step4ErrorStreet,
        step4ErrorCity,
        step4ErrorPostCode,
        step4ErrorPhone,
        step4ErrorHour
      });
      return false;
    }

    return true;
  };

  addStep = (formStep, currentStep) => {
    this.setState({
      currentStep: currentStep + 1,
      formStep: formStep + 1
    });
  };

  handleNextStep = () => {
    const { currentStep, formStep } = this.state;
    if (currentStep === 0 && this.isValidStep1()) {
      this.addStep(formStep, currentStep);
    } else if (!this.isValidStep1()) {
      this.setState({
        step1Error: "Musisz wybrać chociaż jedną opcję"
      });
    } else if (currentStep === 1 && this.isValidStep2()) {
      this.addStep(formStep, currentStep);
    } else if (!this.isValidStep2()) {
      this.setState({
        step2Error: "Musisz wybrać chociaż jedną opcję"
      });
    } else if (currentStep === 2 && this.isValidStep3()) {
      this.addStep(formStep, currentStep);
    } else if (!this.isValidStep3()) {
      this.setState({
        step3Error: "Podaj swoją lokalizację"
      });
    } else if (currentStep === 3 && this.isValidStep4()) {
      this.addStep(formStep, currentStep);
    } else if (!this.isValidStep4()) {
      return;
    } else if (formStep < 5) {
      this.addStep(formStep, currentStep);
    }
  };

  handlePrevStep = () => {
    const { currentStep, formStep } = this.state;
    if (currentStep >= 1) {
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

  handleSend = () => {
    const { formStep } = this.state;

    this.setState({
      formStep: formStep + 1
    });

    setTimeout(() => {
      this.setState(initialState);
      this.props.history.push("/");
    }, 5000);
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
      step2Error,
      step3Error,
      step4ErrorStreet,
      step4ErrorCity,
      step4ErrorPostCode,
      step4ErrorPhone,
      step4ErrorHour
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
      step2Error,
      step3Error,
      step4ErrorStreet,
      step4ErrorCity,
      step4ErrorPostCode,
      step4ErrorPhone,
      step4ErrorHour
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
      return <SuccessComponent />;
    }
  };

  render() {
    const { steps, currentStep, formStep } = this.state;
    const nextSendBtn =
      formStep === 4 ? (
        <button className="formContainer__nextBtn" onClick={this.handleSend}>
          Wyślij
        </button>
      ) : (
        <button
          className="formContainer__nextBtn"
          onClick={this.handleNextStep}
        >
          Dalej
        </button>
      );
    const prevButton =
      formStep === 0 ? (
        <button
          className="formContainer__prevBtn formContainer__prevBtn--disabled"
          onClick={this.handlePrevStep}
        >
          Wróć
        </button>
      ) : (
        <button
          className="formContainer__prevBtn"
          onClick={this.handlePrevStep}
        >
          Wróć
        </button>
      );

    const renderButtons =
      this.state.formStep < 5 ? (
        <div className="formContainer__formBtnContainer">
          {prevButton}
          {nextSendBtn}
        </div>
      ) : null;

    const renderStepper =
      this.state.formStep < 5 ? (
        <Stepper
          steps={steps}
          activeStep={currentStep}
          circleLineHeight={"36"}
          size={36}
          activeColor="#0166eb"
          completeColor="#0166eb"
          completeBarColor="#948c8c"
        />
      ) : null;

    return (
      <>
        <div className="stepper">
          {renderStepper}
          <section className="formContainer">
            {this.renderStep()}
            {renderButtons}
          </section>
        </div>
      </>
    );
  }
}

export default withRouter(MultiStepFormComponent);
