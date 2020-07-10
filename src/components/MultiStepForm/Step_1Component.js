import React from "react";

function Step_1Component(props) {
  const { values, handleChange } = props;
  return (
    <div className="step-1">
      <h2 className="step-1__header formHeader">Zaznacz co chcesz oddać:</h2>
      <div className="step-1__inputContainer">
        <input
          type="checkbox"
          id="check-1"
          className="step-1__items"
          name="clothes"
          value={values.clothes}
          checked={values.clothes}
          onChange={handleChange()}
        />
        <label htmlFor="check-1">ubrania w dobrym stanie</label>
      </div>
      <div className="step-1__inputContainer">
        <input
          type="checkbox"
          id="check-2"
          className="step-1__items"
          name="toys"
          value={values.toys}
          checked={values.toys}
          onChange={handleChange()}
        />
        <label htmlFor="check-2">zabawki</label>
      </div>
      <div className="step-1__inputContainer">
        <input
          type="checkbox"
          id="check-3"
          className="step-1__items"
          name="books"
          value={values.books}
          checked={values.books}
          onChange={handleChange()}
        />
        <label htmlFor="check-3">książki</label>
      </div>
      <div className="step-1__inputContainer">
        <input
          type="checkbox"
          id="check-4"
          className="step-1__items"
          name="other"
          value={values.other}
          checked={values.other}
          onChange={handleChange()}
        />
        <label htmlFor="check-4">inne</label>
      </div>
      {values.step1Error ? (
        <span className="stepErrorMsg">{values.step1Error}</span>
      ) : null}
    </div>
  );
}

export default Step_1Component;
