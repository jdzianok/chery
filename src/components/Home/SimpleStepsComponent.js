import React from "react";
import { Link } from "react-router-dom";
import step_1 from "../../assets/1_step.svg";
import step_2 from "../../assets/2_step.svg";
import step_3 from "../../assets/3_step.svg";
import step_4 from "../../assets/4_step.svg";
import arrow_right from "../../assets/arrow_right_big.svg";

const SimpleStepsComponent = () => {
  return (
    <main className="steps" name="steps" id="steps">
      <h2 className="steps__header">Wystarczą 4 proste kroki</h2>
      <div className="steps__container">
        <div className="steps__box">
          <img className="steps__icon" src={step_1} alt="cloth" />
          <p className="steps__title">Wybierz rzeczy</p>
          <p className="steps__subtitle">Ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps__box">
          <img className="steps__icon" src={step_2} alt="bag" />
          <p className="steps__title">Zapakuj</p>
          <p className="steps__subtitle">Wykorzystaj worki na śmieci</p>
        </div>
        <div className="steps__box">
          <img className="steps__icon" src={step_3} alt="shield" />
          <p className="steps__title">Wybierz organizację</p>
          <p className="steps__subtitle">Zdecyduj komu chcesz pomóc</p>
        </div>
        <div className="steps__box">
          <img className="steps__icon" src={step_4} alt="car" />
          <p className="steps__title">Zamów kuriera</p>
          <p className="steps__subtitle">Wybierz dogodny termin</p>
        </div>
        <button className="steps__btn">
          <Link to="/stepForm" className="stepsLink">
            <p>Oddaj rzeczy</p>
            <img src={arrow_right} alt="" />
          </Link>
        </button>
      </div>
    </main>
  );
};

export default SimpleStepsComponent;
