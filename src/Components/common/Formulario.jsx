import React, { useState } from "react";

function Formulario({ setTarget, validateInputs, number, error, isBlank }) {
  return (
    <div className="formulario">
      <div className="form-group">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g.Jane Appleseed"
          onChange={setTarget}
          name="name"
          required
          maxLength="35"
          className={error.name || isBlank.name ? "error" : ""}
        />
        <span className={error.name ? "error" : "hide"}>
          Wrong format, letters only
        </span>
        <span className={isBlank.name ? "error" : "hide"}>Can't be blank</span>
      </div>
      <div className="form-group">
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          placeholder="e.g_ 1234 5678 9123 0000"
          required
          maxLength="19"
          onChange={setTarget}
          name="number"
          value={number
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
          className={error.number || isBlank.number ? "error" : ""}
        />
        <span className={error.number ? "error" : "hide"}>
          Wrong format, numbers only
        </span>
        <span className={isBlank.number ? "error" : "hide"}>
          Can't be blank
        </span>
      </div>
      <div className="form-group cardInfo">
        <div className="form-group_date">
          <label htmlFor="">EXP.DATE (MM/YY)</label>
          <div className="form_group_date-dateInfo-container">
            <div className="form_group_date-dateInfo">
              <input
                type="text"
                placeholder="MM"
                onChange={setTarget}
                name="expMonth"
                required
                maxLength="2"
                min="1"
                max="12"
                className={error.expMonth || isBlank.expMonth ? "error" : ""}
              />
              <input
                type="text"
                placeholder="YY"
                onChange={setTarget}
                name="expYear"
                required
                maxLength="2"
                min="23"
                max="27"
                className={error.expYear || isBlank.expYear ? "error" : ""}
              />
            </div>
          </div>
          <span className={error.expMonth || error.expYear ? "error" : "hide"}>
            Wrong format
          </span>
          <span
            className={isBlank.expMonth || isBlank.expYear ? "error" : "hide"}
          >
            Can't be blank
          </span>
        </div>
        <div className="form-group_cvc">
          <label htmlFor="">CVC</label>
          <input
            type="text"
            placeholder="e.g. 123"
            onChange={setTarget}
            name="cvc"
            required
            maxLength="3"
            className={error.cvc || isBlank.cvc ? "error" : ""}
          />
          <span className={isBlank.cvc ? "error" : "hide"}>Can't be blank</span>
        </div>
      </div>
      <div className="form-group">
        <button className="btnConfirm" onClick={validateInputs}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Formulario;
