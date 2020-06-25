import React from "react";

function Step_2Component(props) {
  const { values, handleChange } = props;
  return (
    <div className="step-2">
      <h2 className="step-2__header formHeader">
        Podaj liczbę spakowanych worków:
      </h2>
      <div className="step-2__inputContainer">
        <label htmlFor="bags">Liczba 60l worków:</label>
        <select id="bags" value={values.bags} onChange={handleChange("bags")}>
          <option value="">&#8212; wybierz &#8212;</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {values.step2Error ? (
        <span className="stepErrorMsg">{values.step2Error}</span>
      ) : null}
    </div>
  );
}

export default Step_2Component;
