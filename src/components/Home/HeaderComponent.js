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
        <div>
          <h1>
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy
            <br />w zaufane ręce
          </h1>
        </div>
        <img className="header__background" src={header_left} alt="" />
        <img className="header__background" src={header_right} alt="" />
        <button>
          <Link className="link" to="/logowanie">
            <p>Oddaj rzeczy</p>
            <img src={arrow_right} alt="" />
          </Link>
        </button>
        <button>
          <Link className="link" to="/logowanie">
            <p>Zorganizuj zbiórkę</p>
            <img src={arrow_right} alt="" />
          </Link>
        </button>
      </div>
    );
  }
}

export default HeaderComponent;
