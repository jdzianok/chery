import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavigationComponent from "../Navigation/NavigationComponent";
const firebase = require("firebase");

class LoginComponent extends Component {
  state = {
    email: null,
    password: null,
    loginError: ""
  };

  submitLogin = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          loginError: "Server error"
        });
        console.log(error);
      });
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
          <form className="loginForm" onSubmit={e => this.submitLogin(e)}>
            <h2 className="loginForm__header">Zaloguj się</h2>
            <div className="loginForm__formContent">
              <input
                id="register-email-input"
                type="email"
                autoFocus
                autoComplete="email"
                required
                onChange={e => this.userTyping("email", e)}
              />
              <label htmlFor="register-email-input" className="input-label">
                <span className="content">E-mail</span>
              </label>
            </div>
            <div className="loginForm__formContent">
              <input
                id="register-password-input"
                type="password"
                required
                onChange={e => this.userTyping("password", e)}
              />
              <label htmlFor="register-password-input" className="input-label">
                <span className="content">Hasło</span>
              </label>
            </div>
            {this.state.loginError ? (
              <p style={{ color: "red", textAlign: "center", fontSize: 16 }}>
                {this.state.loginError}
              </p>
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
              <Link className="link" to="/signIn">
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
