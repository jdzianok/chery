import React from "react";
import items_logo from "../../assets/1_step.svg";
import bags_logo from "../../assets/2_step.svg";
import receivers_logo from "../../assets/3_step.svg";
import address_logo from "../../assets/4_step.svg";
import organizations_logo from "../../assets/organizations.svg";

function SummaryComponent(props) {
  const { values } = props;
  // console.log(values.clothes);
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

  let items = [];
  let receivers = [];

  const {
    clothes,
    toys,
    books,
    other,
    kids,
    mothers,
    homeless,
    handicapped,
    elderly,
    organization
  } = values;
  const pushItems = (clothes, toys, books, other) => {
    if (clothes) {
      items.push("Ubrania");
    }
    if (toys) {
      items.push("Zabawki");
    }
    if (books) {
      items.push("Książki");
    }
    if (other) {
      items.push("Inne");
    }
    return items;
  };
  const pushReceivers = (kids, mothers, homeless, handicapped, elderly) => {
    if (kids) {
      receivers.push("Dzieciom");
    }
    if (mothers) {
      receivers.push("Samotnym matkom");
    }
    if (homeless) {
      receivers.push("Bezdomnym");
    }
    if (handicapped) {
      receivers.push("Niepełnosprawnym");
    }
    if (elderly) {
      receivers.push("Osobom starszym");
    }
    return receivers;
  };

  pushItems(clothes, toys, books, other);
  pushReceivers(kids, mothers, homeless, handicapped, elderly);
  const itemsParagraf = items.map(item => (
    <p key={item} className="wrap-up__info">
      {item}
    </p>
  ));

  const receiversParagraf =
    receivers.length !== 0 ? (
      receivers.map(item => (
        <p key={item} className="wrap-up__info">
          {item}
        </p>
      ))
    ) : (
      <p className="wrap-up__info">Brak preferencji</p>
    );

  return (
    <div className="wrap-up">
      <h2 className="wrap-up__header formHeader">
        Podsumowanie Twojej darowizny
      </h2>
      <div className="wrap-up__container">
        <div className="wrap-up__box">
          <img src={bags_logo} alt="" className="wrap-up__icon" />
          <div className="wrap-up__boxContent">
            <h3 className="wrap-up__title">Ile worków?</h3>
            <p className="wrap-up__info">
              {values.bags}
              {values.bags === "1"
                ? " worek"
                : values.bags === "5"
                ? " worków"
                : " worki"}
            </p>
          </div>
        </div>
        <div className="wrap-up__box">
          <img src={items_logo} alt="" className="wrap-up__icon" />
          <div className="wrap-up__boxContent">
            <h3 className="wrap-up__title">Co oddajesz?</h3>
            {itemsParagraf}
          </div>
        </div>
        <div className="wrap-up__box">
          <img src={receivers_logo} alt="" className="wrap-up__icon" />
          <div className="wrap-up__boxContent">
            <h3 className="wrap-up__title">Dla kogo?</h3>
            {receiversParagraf}
          </div>
        </div>
        {organization ? (
          <div className="wrap-up__box">
            <img src={organizations_logo} alt="" className="wrap-up__icon" />
            <div className="wrap-up__boxContent">
              <h3 className="wrap-up__title">Organizacja:</h3>
              <p className="wrap-up__info">{organization}</p>
            </div>
          </div>
        ) : null}
        <div className="wrap-up__box">
          <img src={address_logo} alt="" className="wrap-up__icon" />
          <div className="wrap-up__boxContent">
            <h3 className="wrap-up__title">Adres odbioru:</h3>
            <p className="wrap-up__info">{values.street}</p>
            <p className="wrap-up__info">{values.city}</p>
            <p className="wrap-up__info">{values.postCode}</p>
            <p className="wrap-up__info">{values.phone}</p>
            <p className="wrap-up__info">{changeDateFormat(values.date)}</p>
            <p className="wrap-up__info">{values.hour}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;
