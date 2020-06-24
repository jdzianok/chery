import React from "react";
import plus from "../../assets/plus.svg";
import exclamation from "../../assets/exclamation.svg";
import smile from "../../assets/smile.svg";

const ThreeColumnsComponent = () => {
  return (
    <div className="wrapper_threeColumns">
      <section className="summary">
        <div className="summary__box">
          <div className="summary__numberContainer">
            <p className="summary__number">1000</p>
            <img src={plus} alt="plus" />
          </div>
          <p className="summary__title">Oddanych worków</p>
          <p className="summary__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma aliquam.
          </p>
        </div>
        <div className="summary__box">
          <div className="summary__numberContainer">
            <p className="summary__number">20</p>
            <img className="diff" src={exclamation} alt="exclamation" />
          </div>
          <p className="summary__title">Wspartych organizacji</p>
          <p className="summary__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="summary__box">
          <div className="summary__numberContainer">
            <p className="summary__number">12</p>
            <img src={smile} alt="smile" />
          </div>
          <p className="summary__title">Zorganizowanych zbiórek</p>
          <p className="summary__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThreeColumnsComponent;
