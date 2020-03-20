import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavigationComponent from "../Navigation/NavigationComponent";
import header_left from "../../assets/header_left.png";
import header_right from "../../assets/header_right.png";
const firebase = require("firebase");

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
    loginError: "",
    emailError: ""
  };

  validate = () => {
    this.setState({ emailError: "" });
    let emailError = "";

    if (!this.state.email.includes("@") && this.state.email.length < 4) {
      emailError = "Niepoprawny email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  submitLogin = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.props.history.push("/");
        })
        .catch(error => {
          this.setState({
            loginError: "Niepoprawne hasło lub login"
          });
          console.log(error);
        });
    }
  };

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case "email":
        this.setState({ email: event.target.value });
        break;

      case "password":
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <NavigationComponent />
        <section className="loginContainer">
          <div className="loginContainer__backgroundContainer">
            <img
              className="loginContainer__background--left"
              src={header_left}
              alt=""
            />
            <img
              className="loginContainer__background--right"
              src={header_right}
              alt=""
            />
          </div>
          <form className="loginForm" onSubmit={e => this.submitLogin(e)}>
            <h2 className="loginForm__header">Zaloguj się</h2>
            <div className="loginForm__formContent">
              <input
                id="register-email-input"
                type="email"
                autoFocus
                autoComplete="email"
                required
                placeholder=" "
                onChange={e => this.userTyping("email", e)}
              />
              <label htmlFor="register-email-input" className="input-label">
                <span className="content">E-mail*</span>
              </label>
            </div>
            {this.state.emailError ? (
              <p className="loginForm__error">{this.state.emailError}</p>
            ) : null}
            <div className="loginForm__formContent">
              <input
                id="register-password-input"
                type="password"
                placeholder=" "
                required
                onChange={e => this.userTyping("password", e)}
              />
              <label htmlFor="register-password-input" className="input-label">
                <span className="content">Hasło*</span>
              </label>
            </div>
            {this.state.loginError ? (
              <p className="loginForm__error">{this.state.loginError}</p>
            ) : null}
            <button
              type="submit"
              onClick={e => this.submitLogin(e)}
              className="loginForm__submitBtn"
            >
              Zaloguj
            </button>
            <p className="loginForm__info">Nie masz konta?</p>
            <button className="loginForm__switchBtn">
              <Link className="link" to="/signUp">
                Zarejestruj się
              </Link>
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default withRouter(LoginComponent);
