import React from "react";

function CardBack({ Cvc }) {
  return (
    <div className="card-back">
      {Cvc.length == 0 ? <p>000</p> : <p>{Cvc}</p>}
    </div>
  );
}

export default CardBack;
