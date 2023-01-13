import React, { useState } from "react";

function Formulario({ putName, putNumber, putMonth, number, putYear, putCvc }) {
  // const [name, setName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="formulario">
      <div className="form-group">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g.Jane Appleseed"
          // onChange={(e) => setName(e.target.value)}
          onChange={putName}
          required
          maxLength="35"
        />
      </div>
      <div className="form-group">
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          placeholder="e.g_ 1234 5678 9123 0000"
          required
          maxLength="19"
          value={number
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
          onChange={putNumber}
        />
      </div>
      <div className="form-group cardInfo">
        <div className="form-group_date">
          <label htmlFor="">EXP.DATE (MM/YY)</label>
          <div className="form_group_date-dateInfo">
            <input
              type="text"
              placeholder="MM"
              onChange={putMonth}
              required
              maxLength="2"
              min="1"
              max="12"
            />
            <input
              type="text"
              placeholder="YY"
              onChange={putYear}
              required
              maxLength="2"
              min="23"
              max="27"
            />
          </div>
        </div>
        <div className="form-group_cvc">
          <label htmlFor="">CVC</label>
          <input
            type="text"
            placeholder="e.g. 123"
            onChange={putCvc}
            required
            maxLength="3"
          />
        </div>
      </div>
      <div className="form-group">
        <button className="btnConfirm">Confirm</button>
      </div>
    </div>
  );
}

export default Formulario;
