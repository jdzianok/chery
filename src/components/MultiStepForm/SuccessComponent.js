import React from "react";

function SuccessComponent() {
  return (
    <div className="success">
      <h2 className="success__header formHeader">
        Gratulacje, właśnie zrobiłeś coś dobrego!
      </h2>
      <p className="success__info">
        Potwierdzenie Twojej darowizny prześlemy na Twój adres e-mail.
      </p>
    </div>
  );
}

export default SuccessComponent;
