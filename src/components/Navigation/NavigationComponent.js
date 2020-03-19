import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.svg";
const firebase = require("firebase");

const options = {
  activeClass: "active",
  duration: 700,
  spy: true,
  smooth: true,
  offset: -100
};

class NavigationComponent extends Component {
  state = {
    openMenu: false,
    scroll: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== true) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  };

  handleOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  logout = () => {
    firebase.auth().signOut();
    this.props.history.push("/");
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { openMenu, scroll } = this.state;
    const { isLogged } = this.props;
    return (
      <div className={`menu${scroll ? " menu--scroll" : ""}`}>
        <div className="menu__logo">
          <Link to="/">
            <img src={logo} alt="logo" className="menu__image" />
          </Link>
        </div>
        <div className="menu__hamburger" onClick={this.handleOpenMenu}>
          <div
            className={`hamburger__line hamburger__top${
              openMenu ? "--open" : ""
            }`}
          ></div>
          <div
            className={`hamburger__line hamburger__middle${
              openMenu ? "--open" : ""
            }`}
          ></div>
          <div
            className={`hamburger__line hamburger__bottom${
              openMenu ? "--open" : ""
            }`}
          ></div>
        </div>
        <nav className={`navigation${openMenu ? " navigation--open" : ""}`}>
          <ul className="navigation__list">
            <li className="navigation__item">
              {this.props.history.location.pathname !== "/" ? (
                <p>O co chodzi?</p>
              ) : (
                <ScrollLink
                  onClick={this.handleOpenMenu}
                  to="steps"
                  {...options}
                >
                  O co chodzi?
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item">
              {this.props.history.location.pathname !== "/" ? (
                <p>O nas</p>
              ) : (
                <ScrollLink
                  onClick={this.handleOpenMenu}
                  to="aboutUs"
                  {...options}
                >
                  O nas
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item">
              {this.props.history.location.pathname !== "/" ? (
                <p>Fundacje i organizacje</p>
              ) : (
                <ScrollLink
                  onClick={this.handleOpenMenu}
                  to="whoWeHelp"
                  {...options}
                >
                  Fundacje i organizacje
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item">
              {this.props.history.location.pathname !== "/" ? (
                <p>Kontakt</p>
              ) : (
                <ScrollLink
                  onClick={this.handleOpenMenu}
                  to="contact"
                  {...options}
                >
                  Kontakt
                </ScrollLink>
              )}
            </li>
          </ul>
          <div className="navigation__login">
            {isLogged ? (
              <p className="user">
                {this.capitalizeFirstLetter(isLogged.split("@")[0])}
              </p>
            ) : (
              <button className="navigation__loginBtn navigation__btn">
                <Link className="navigation__link-in" to="/signIn">
                  Zaloguj
                </Link>
              </button>
            )}
            <button className="navigation__signUpBtn navigation__btn">
              {isLogged ? (
                <p className="logOut" onClick={() => this.logout()}>
                  Wyloguj
                </p>
              ) : (
                <Link className="navigation__link-up" to="/signUp">
                  Załóż konto
                </Link>
              )}
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationComponent);
