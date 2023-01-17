import React from "react";

function Confirmed() {
  return (
    <div className="confirmed-container">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cinepolis-hosting.appspot.com/o/PayMethod%20Main%20Card%2Ficon-complete.svg?alt=media&token=5181144a-1026-4f98-9db7-1f47d96602b0"
        alt=""
        className="confirmed-image"
      />
      <h3>THANK YOU!</h3>
      <p>We've added your card details</p>
      <button className="btnContinue">Continue</button>
    </div>
  );
}

export default Confirmed;
