import React from "react";

function Card({ Number, Name, Month, Year }) {
  console.log(Month);
  return (
    <div className="card-front">
      <div className="top-card">
        <div className="circle"></div>
        <div className="circle-border"></div>
      </div>
      <div className="bottom-card">
        <div className="bottom-card_number">
          {Number.length == 0 ? <p>0000 0000 0000 0000</p> : <p>{Number}</p>}
        </div>
        <div className="bottom-card_info">
          <div className="bottom-card_name">
            {Name.length == 0 ? <p>Jane Appleseed</p> : <p>{Name}</p>}
          </div>
          <div className="bottom-card_date">
            {Month == undefined ? "00" : Month}/
            {Year == undefined ? "00" : Year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
