import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationComponent from "../Navigation/NavigationComponent";
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
          <form className="registerForm" onSubmit={e => this.submitRegister(e)}>
            <h2 className="registerForm__header">Zarejestruj się</h2>
            {/* <div className="registerForm__formContent">
              <label htmlFor="register-email-input">E-mail</label>
              <input
                id="register-email-input"
                type="email"
                autoFocus
                autoComplete="email"
                onChange={e => this.userTyping("email", e)}
              />
              <span></span>
            </div>
            <div className="registerForm__formContent">
              <label htmlFor="register-password-input">Hasło</label>
              <input
                id="register-password-input"
                type="password"
                onChange={e => this.userTyping("password", e)}
              />
              <span></span>
            </div>
            <div className="registerForm__formContent">
              <label htmlFor="register-password-confirmation-input">
                Powtórz hasło
              </label>
              <input
                id="register-password-confirmation-input"
                type="password"
                onChange={e => this.userTyping("passwordConfirmation", e)}
              />
              <span></span>
            </div> */}
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
