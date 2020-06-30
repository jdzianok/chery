import React from "react";

function Step_3Component(props) {
  const { values, handleChange } = props;
  return (
    <div className="step-3">
      <h2 className="step-3__header formHeader">Lokalizacja:</h2>
      <div className="step-3__inputContainer">
        <div className="holder">
          <label htmlFor="location">Podaj lokalizację:</label>
          <select
            id="location"
            value={values.location}
            onChange={handleChange("location")}
          >
            <option value="">&#8212; wybierz &#8212;</option>
            <option value="Poznań">Poznań</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
          {values.step3Error ? (
            <span className="stepErrorMsg">{values.step3Error}</span>
          ) : null}
        </div>
        <div className="step-3__selectContainer">
          <h3 className="step-3__selectContainer__whoHelp">
            Komu chcesz pomóc?
          </h3>
          <input
            type="checkbox"
            id="check_1"
            className="step-3__selectContainer__checkbox"
            name="kids"
            value={values.kids}
            checked={values.kids}
            onChange={handleChange()}
          />
          <label htmlFor="check_1">dzieciom</label>
          <input
            type="checkbox"
            id="check_2"
            name="mothers"
            className="step-3__selectContainer__checkbox"
            value={values.mothers}
            checked={values.mothers}
            onChange={handleChange()}
          />
          <label htmlFor="check_2">samotnym matkom</label>
          <input
            type="checkbox"
            id="check_3"
            name="homeless"
            className="step-3__selectContainer__checkbox"
            value={values.homeless}
            checked={values.homeless}
            onChange={handleChange()}
          />
          <label htmlFor="check_3">bezdomnym</label>
          <input
            type="checkbox"
            id="check_4"
            name="handicapped"
            className="step-3__selectContainer__checkbox"
            value={values.handicapped}
            checked={values.handicapped}
            onChange={handleChange()}
          />
          <label htmlFor="check_4">niepełnosprawnym</label>
          <input
            type="checkbox"
            id="check_5"
            name="elderly"
            className="step-3__selectContainer__checkbox"
            value={values.elderly}
            checked={values.elderly}
            onChange={handleChange()}
          />
          <label htmlFor="check_5">osobom starszym</label>
          <div className="step-3__selectContainer__option">
            <input
              id="organization"
              type="text"
              placeholder=" "
              value={values.organization}
              onChange={handleChange("organization")}
            />
            <label htmlFor="organization" className="input-label">
              <span id="content" className="content">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </span>
            </label>
          </div>
          {/* <h3 className="step-3__selectContainer__whoHelp">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </h3>
          <input
            type="text"
            className="step-3__selectContainer__organization"
            value={values.organization}
            onChange={handleChange("organization")}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Step_3Component;
