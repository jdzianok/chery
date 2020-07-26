import React from "react";

function Step_4Component(props) {
  const { values, handleChange } = props;
  const startDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="step-4">
      <h2 className="step-4__header formHeader">
        Podaj adres i termin odbioru rzeczy:
      </h2>
      <div className="step-4__addressContainer">
        <h3 className="step-4__addressContainer__header">Adres odbioru:</h3>
        <div className="step-4__addressContainer__inputContainer">
          <input
            id="street"
            type="text"
            placeholder=" "
            value={values.street}
            required
            onChange={handleChange("street")}
          />
          <label htmlFor="street" className="input-label">
            <span className="content">Ulica</span>
          </label>
        </div>
        {values.step4ErrorStreet ? (
          <span className="stepErrorMsg">{values.step4ErrorStreet}</span>
        ) : null}
        <div className="step-4__addressContainer__inputContainer">
          <input
            id="city"
            type="text"
            placeholder=" "
            value={values.city}
            required
            onChange={handleChange("city")}
          />
          <label htmlFor="city" className="input-label">
            <span className="content">Miasto</span>
          </label>
        </div>
        {values.step4ErrorCity ? (
          <span className="stepErrorMsg">{values.step4ErrorCity}</span>
        ) : null}
        <div className="step-4__addressContainer__inputContainer">
          <input
            id="postCode"
            type="text"
            placeholder=" "
            value={values.postCode}
            required
            onChange={handleChange("postCode")}
          />
          <label htmlFor="postCode" className="input-label">
            <span className="content">Kod pocztowy</span>
          </label>
        </div>
        {values.step4ErrorPostCode ? (
          <span className="stepErrorMsg">{values.step4ErrorPostCode}</span>
        ) : null}
        <div className="step-4__addressContainer__inputContainer">
          <input
            id="phone"
            type="number"
            placeholder=" "
            value={values.phone}
            required
            onChange={handleChange("phone")}
          />
          <label htmlFor="phone" className="input-label">
            <span className="content">Telefon</span>
          </label>
        </div>
        {values.step4ErrorPhone ? (
          <span className="stepErrorMsg">{values.step4ErrorPhone}</span>
        ) : null}
      </div>
      <div className="step-4__dateContainer">
        <h3 className="step-4__dateContainer__header">Termin odbioru:</h3>
        <div className="step-4__dateContainer__inputContainer">
          <input
            id="date"
            type="text"
            onFocus={e => (e.target.type = "date")}
            onBlur={e => (e.target.type = "text")}
            min={startDate}
            value={values.date}
            placeholder=" "
            required
            onChange={handleChange("date")}
          />
          <label htmlFor="date" className="input-label">
            <span className="content">Data</span>
          </label>
        </div>
        <div className="step-4__dateContainer__inputContainer">
          <input
            id="time"
            type="text"
            onFocus={e => (e.target.type = "time")}
            onBlur={e => (e.target.type = "text")}
            placeholder=" "
            value={values.hour}
            required
            onChange={handleChange("hour")}
          />
          <label htmlFor="time" className="input-label">
            <span className="content">Godzina</span>
          </label>
        </div>
        {values.step4ErrorHour ? (
          <span className="stepErrorMsg">{values.step4ErrorHour}</span>
        ) : null}
      </div>
    </div>
  );
}

export default Step_4Component;
