import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, withRouter } from "react-router-dom";
import { HashLink as LinkHash } from "react-router-hash-link";
import logo from "../../assets/logo.svg";

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

  handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  handleOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { openMenu, scroll } = this.state;
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
                <LinkHash
                  to="/#steps"
                  scroll={el =>
                    el.scrollIntoView({
                      block: "center",
                      inline: "nearest"
                    })
                  }
                  onClick={this.handleOpenMenu}
                >
                  O co chodzi?
                </LinkHash>
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
                <LinkHash
                  to="/#aboutUs"
                  scroll={el =>
                    el.scrollIntoView({
                      block: "center",
                      inline: "nearest"
                    })
                  }
                  onClick={this.handleOpenMenu}
                >
                  O nas
                </LinkHash>
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
                <LinkHash
                  to="/#whoWeHelp"
                  scroll={el =>
                    el.scrollIntoView({
                      block: "center",
                      inline: "nearest"
                    })
                  }
                  onClick={this.handleOpenMenu}
                >
                  Fundacje i organizacje
                </LinkHash>
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
                <LinkHash
                  to="/#contact"
                  scroll={el =>
                    el.scrollIntoView({
                      block: "center",
                      inline: "nearest"
                    })
                  }
                  onClick={this.handleOpenMenu}
                >
                  Kontakt
                </LinkHash>
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
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationComponent);
