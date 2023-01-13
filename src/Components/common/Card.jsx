import React from "react";

function Card({ Number, Name, Month, Year }) {
  return (
    <div className="card-front">
      <div className="top-card"></div>
      <div className="bottom-card">
        <div className="bottom-card_number">
          <p>{Number}</p>
        </div>
        <div className="bottom-card_info">
          <div className="bottom-card_name">{Name}</div>
          <div className="bottom-card_date">
            {Month}/{Year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
