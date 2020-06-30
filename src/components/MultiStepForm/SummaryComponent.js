import React from "react";

function SummaryComponent(props) {
  const { values } = props;
  console.log(values.clothes);
  const changeDateFormat = inputDate => {
    // expects Y-m-d
    var splitDate = inputDate.split("-");
    if (splitDate.count === 0) {
      return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    return day + "." + month + "." + year;
  };

  return (
    <div className="summary">
      <h2 className="summary__header formHeader">
        Podsumowanie Twojej darowizny
      </h2>
      <div className="summary__youGive">
        <h3 className="summary__youGive__header">Oddajesz:</h3>
        <div className="summary__youGive__container">
          <p className="summary__youGive__bags">
            {values.bags}
            {values.bags === "1" ? " worek" : " worki"}
          </p>
          {values.clothes ? (
            <p className="summary__youGive__items">ubrania</p>
          ) : null}
          {values.toys ? (
            <p className="summary__youGive__items">zabawki</p>
          ) : null}
          {values.books ? (
            <p className="summary__youGive__items">książki</p>
          ) : null}
          {values.other ? (
            <p className="summary__youGive__items">inne</p>
          ) : null}
        </div>
        <div className="summary__youGive__container">
          <p className="summary__youGive__location">
            Lokalizacja: {values.location}
          </p>
        </div>
      </div>
      <div className="summary__deliveryAddress">
        <h3 className="summary__deliveryAddress__header">Adres odbioru:</h3>
        <p className="summary__deliveryAddress__address">
          Ulica: {values.street}
        </p>
        <p className="summary__deliveryAddress__address">
          Miasto: {values.city}
        </p>
        <p className="summary__deliveryAddress__address">
          Kod pocztowy: {values.postCode}
        </p>
        <p className="summary__deliveryAddress__address">
          Telefon: {values.phone}
        </p>
      </div>
      <div className="summary__pickUpTime">
        <h3 className="summary__pickUpTime__header">Termin odbioru:</h3>
        <p className="summary__pickUpTime__date">
          Data: {changeDateFormat(values.date)}
        </p>
        <p className="summary__pickUpTime__date">Godzina: {values.hour}</p>
      </div>
    </div>
  );
}

export default SummaryComponent;
