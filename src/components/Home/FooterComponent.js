import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const FooterComponent = () => {
  return (
    <div className="wrapper_footer">
      <footer className="footer">
        <div className="footer__copy">
          <p className="footer__text">Copyright Chery</p>
          <p className="footer__text">Polityka prywatności</p>
        </div>
        <div className="footer__media">
          <img className="footer__logo" src={facebook} alt="facebook" />
          <img className="footer__logo" src={twitter} alt="twitter" />
          <img className="footer__logo" src={instagram} alt="instagram" />
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
