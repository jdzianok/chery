import React, { Component } from "react";

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
    console.log(contactObj, this.state);
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
        <div className="contact__backgroundImage"></div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h3 className="form__header">Skontaktuj się z nami</h3>
          {this.state.messageSend && <p>wysłano</p>}
          <div className="form__container">
            <div className="form__nameContainer">
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                placeholder="Wpisz swoje imię"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                onBlur={() => this.handleNameValidation()}
              />
              {this.state.nameError && (
                <p style={{ color: "red" }}>Podane imię jest nieprawidłowe</p>
              )}
            </div>
            <div className="form__emailContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="Podaj adres e-mail"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={() => this.handleEmailValidation()}
              />
              {this.state.emailError && (
                <p style={{ color: "red" }}>Podany e-mail jest nieprawidłowy</p>
              )}
            </div>
          </div>
          <div className="form__messageContainer">
            <label>Wiadomość</label>
            <textarea
              placeholder="Wpisz treść wiadomości"
              name="message"
              // rows="3"
              value={this.state.message}
              onChange={this.handleChange}
              onBlur={() => this.handleMessageValidation()}
            ></textarea>
            {this.state.messageError && (
              <p style={{ color: "red" }}>
                Wiadomość musi mieć conajmniej 120 znaków
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
