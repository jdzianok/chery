import React, { Component } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
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
    scroll: false,
    sectionToScroll: ""
  };

  scrollToSection(destination) {
    // console.log("push");
    this.props.history.push({ pathname: "/" });
    this.setState({ sectionToScroll: destination });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.sectionToScroll.length > 1) {
      scroller.scrollTo(this.state.sectionToScroll, {
        duration: 500,
        smooth: true,
        spy: true,
        offset: -20
      });
    }
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

  handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    const logoImg = (
      <img
        src={logo}
        alt="logo"
        className="menu__image"
        onClick={this.handleScrollToTop}
      />
    );
    return (
      <div className={`menu${scroll ? " menu--scroll" : ""}`}>
        <div className="menu__logo">
          {this.props.history.location.pathname === "/" ? (
            logoImg
          ) : (
            <Link to="/">{logoImg}</Link>
          )}
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
                <p onClick={() => this.scrollToSection("steps")}>
                  O co chodzi?
                </p>
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
                <p onClick={() => this.scrollToSection("aboutUs")}>O nas</p>
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
                <p onClick={() => this.scrollToSection("whoWeHelp")}>
                  Fundacje i organizacje
                </p>
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
                <p onClick={() => this.scrollToSection("contact")}>Kontakt</p>
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
          {/* <div className="navigation__login">
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
          </div> */}
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationComponent);
