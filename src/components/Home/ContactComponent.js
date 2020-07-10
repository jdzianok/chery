import React, { Component } from "react";
import contact_bg from "../../assets/contact_bg.png";

class ContactComponent extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameError: false,
    emailError: false,
    messageError: false,
    messageSend: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNameValidation = () => {
    const nameValidation = this.state.name.split(" ").length === 1;
    this.setState({ nameError: !nameValidation });
  };

  handleEmailValidation = () => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    this.setState({ emailError: !emailValidation });
  };

  handleMessageValidation = () => {
    const messageValidation = this.state.message.length >= 120;
    this.setState({ messageError: !messageValidation });
  };

  send = () => {
    const { name, email, message } = this.state;
    const contactObj = {
      name,
      email,
      message
    };
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    // console.log(contactObj, this.state);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    })
      .then(response => {
        if (response.ok || response.status === 200) {
          this.setState({ messageSend: true });
          return console.log(response.json(), this.state);
        } else {
          throw new Error("Something is no yes");
        }
      })
      .catch(err => console.log("ups" + err));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nameError, emailError, messageError } = this.state;

    if (!nameError && !emailError && !messageError) {
      this.send();
    }
    this.setState({
      name: "",
      email: "",
      message: "",
      nameError: false,
      emailError: false,
      messageError: false
    });
  };
  render() {
    return (
      <section className="contact">
        <div className="contact__backgroundImage">
          <img src={contact_bg} className="contact__image" alt="phone" />
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h3 className="form__header">Skontaktuj się z nami</h3>
          {this.state.messageSend && (
            <div className="center">
              <p className="form__info">Wysłano wiadomość!</p>
              <p className="form__info">
                Skontaktujemy się z Tobą jak najszybciej.
              </p>
            </div>
          )}
          <div className="form__container">
            <div className="form__nameContainer">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                onBlur={() => this.handleNameValidation()}
              />
              <label htmlFor="name" className="input-label">
                <span className="content">Imię*</span>
              </label>
              {this.state.nameError && (
                <p className="errorMessage" style={{ color: "red" }}>
                  Nieprawidłowe imię
                </p>
              )}
            </div>
            <div className="form__emailContainer">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                onBlur={() => this.handleEmailValidation()}
              />
              <label htmlFor="email" className="input-label">
                <span className="content">E-mail*</span>
              </label>
              {this.state.emailError && (
                <p className="errorMessage" style={{ color: "red" }}>
                  Nieprawidłowy e-mail
                </p>
              )}
            </div>
          </div>
          <div className="form__messageContainer">
            <textarea
              name="message"
              // rows="3"
              value={this.state.message}
              onChange={this.handleChange}
              required
              onBlur={() => this.handleMessageValidation()}
            ></textarea>
            <label className="input-label">
              <span className="content">Wiadomość*</span>
            </label>
            {this.state.messageError && (
              <p className="errorMessage" style={{ color: "red" }}>
                Wiadomość musi mieć co najmniej 120 znaków
              </p>
            )}
          </div>
          <button className="form__submitBtn" type="submit" value="Wyślij">
            Wyślij
          </button>
        </form>
      </section>
    );
  }
}

export default ContactComponent;
