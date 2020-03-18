import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationComponent from "../Navigation/NavigationComponent";
import header_left from "../../assets/header_left.png";
import header_right from "../../assets/header_right.png";
const firebase = require("firebase");

class RegisterComponent extends Component {
  state = {
    email: null,
    password: null,
    passwordConfirmation: null,
    registerError: ""
  };

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitRegister = e => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({
        registerError: "Hasła nie są jednakowe!"
      });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authResponse => {
        const userObj = {
          email: authResponse.user.email
        };

        firebase
          .firestore()
          .collection("users")
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push("/");
          })
          .catch(dbError => {
            console.log(dbError);
            this.setState({ registerError: "Nie udało się dodać użytkownika" });
          });
      })
      .catch(authError => {
        console.log(authError);
        this.setState({ registerError: "Nie udało się dodać użytkownika" });
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

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <NavigationComponent />
        <section className="registerContainer">
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
          <form className="registerForm" onSubmit={e => this.submitRegister(e)}>
            <h2 className="registerForm__header">Zarejestruj się</h2>
            <div className="registerForm__formContent">
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
            <div className="registerForm__formContent">
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
            <div className="registerForm__formContent">
              <input
                id="register-password-confirmation-input"
                type="password"
                required
                onChange={e => this.userTyping("passwordConfirmation", e)}
              />
              <label
                htmlFor="register-password-confirmation-input"
                className="input-label"
              >
                <span className="content">Powtórz hasło</span>
              </label>
            </div>
            {this.state.registerError ? (
              <p style={{ color: "red", textAlign: "center", fontSize: 16 }}>
                {this.state.registerError}
              </p>
            ) : null}

            <button
              type="submit"
              onClick={e => this.submitRegister(e)}
              className="registerForm__submitBtn"
            >
              Zarejestruj
            </button>
            <p className="registerForm__info">Masz już konto?</p>
            <button className="registerForm__switchBtn">
              <Link className="link" to="/signIn">
                Zaloguj się
              </Link>
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default RegisterComponent;
