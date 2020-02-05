import React, { Component } from "react";
import { Link } from "react-router-dom";
import header_left from "../../assets/header_left.png";
import header_right from "../../assets/header_right.png";
import arrow_right from "../../assets/arrow_right_big.svg";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__slogan">
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy
            <br />w zaufane ręce
          </h1>
        </div>
        <div className="header__backgroundContainer">
          <img className="header__background--left" src={header_left} alt="" />
          <img
            className="header__background--right"
            src={header_right}
            alt=""
          />
        </div>
        <div className="header__buttonContainer">
          <button className="header__btn">
            <Link className="link" to="/logowanie">
              <p>Oddaj rzeczy</p>
              <img src={arrow_right} alt="" />
            </Link>
          </button>
          <button className="header__btn">
            <Link className="link" to="/logowanie">
              <p>Zorganizuj zbiórkę</p>
              <img src={arrow_right} alt="" />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
