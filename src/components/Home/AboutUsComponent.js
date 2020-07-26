import React from "react";
import signature from "../../assets/signature.svg";
import groupPhoto from "../../assets/groupPhoto.png";

const AboutUsComponent = () => {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="aboutUs__note">
        <h3 className="aboutUs__title">O nas</h3>
        <p className="aboutUs__info">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signature} alt="signature" className="aboutUs__signature" />
      </div>
      <img src={groupPhoto} alt="group" className="aboutUs__groupPhoto" />
    </section>
  );
};

export default AboutUsComponent;
