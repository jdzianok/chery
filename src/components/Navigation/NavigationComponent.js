import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, Link, withRouter } from "react-router-dom";
// import user from "../../assets/user.svg";
import logo from "../../assets/logo.svg";

const options = {
  activeClass: "active",
  duration: 700,
  spy: true,
  smooth: true,
  offset: -20
};

class NavigationComponent extends Component {
  state = {
    openMenu: false,
    // openLogin: false,
    isLogged: null
  };

  handleOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  // handleOpenLogin = () => {
  //   this.setState({ openLogin: !this.state.openLogin });
  // };
  render() {
    const { openMenu, isLogged } = this.state;
    return (
      <div className="menu">
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
            <li className="navigation__item" onClick={this.handleOpen}>
              {this.props.history.location.pathname !== "/" ? (
                <p>O co chodzi?</p>
              ) : (
                <ScrollLink to="steps" {...options}>
                  O co chodzi?
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item" onClick={this.handleOpen}>
              {this.props.history.location.pathname !== "/" ? (
                <p>O nas</p>
              ) : (
                <ScrollLink to="aboutUs" {...options}>
                  O nas
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item" onClick={this.handleOpen}>
              {this.props.history.location.pathname !== "/" ? (
                <p>Fundacje i organizacje</p>
              ) : (
                <ScrollLink to="whoWeHelp" {...options}>
                  Fundacje i organizacje
                </ScrollLink>
              )}
            </li>
            <li className="navigation__item" onClick={this.handleOpen}>
              {this.props.history.location.pathname !== "/" ? (
                <p>Kontakt</p>
              ) : (
                <ScrollLink to="formContact" {...options}>
                  Kontakt
                </ScrollLink>
              )}
            </li>
          </ul>
          <div className="navigation__login">
            {isLogged ? (
              <p>{isLogged}</p>
            ) : (
              <button className="navigation__loginBtn navigation__btn">
                <Link className="navigation__link-in" to="/signIn">
                  Zaloguj
                </Link>
              </button>
            )}
            <button className="navigation__signUpBtn navigation__btn">
              {isLogged ? (
                <p>Wyloguj</p>
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
