import React, { useState } from "react";
import "../../styles/PayPage.css";
import Formulario from "../common/Formulario";
import Card from "../common/Card";
import CardBack from "../common/CardBack";
import Confirmed from "../common/Confirmed";
function PayPage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const putName = (e) => {
    setName(e.target.value);
  };
  const putNumber = (e) => {
    setNumber(e.target.value);
  };
  const putMonth = (e) => {
    setExpMonth(e.target.value);
  };
  const putYear = (e) => {
    setExpYear(e.target.value);
  };
  const putCvc = (e) => {
    setCvc(e.target.value);
  };

  const isConfirmed = false;

  return (
    <main className="main">
      <div className="left-container">
        <Card Name={name} Number={number} Month={expMonth} Year={expYear} />
        <CardBack Cvc={cvc} />
      </div>
      <div className="right-container">
        {isConfirmed ? (
          <Confirmed />
        ) : (
          <Formulario
            putName={putName}
            putNumber={putNumber}
            putMonth={putMonth}
            number={number}
            putYear={putYear}
            putCvc={putCvc}
          />
        )}
      </div>
    </main>
  );
}

export default PayPage;
