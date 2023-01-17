import React, { useEffect, useState } from "react";
import "../../styles/PayPage.css";
import Formulario from "../common/Formulario";
import Card from "../common/Card";
import CardBack from "../common/CardBack";
import Confirmed from "../common/Confirmed";
import { useForm, useWatch } from "react-hook-form";

function PayPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
  });
  const { control } = form;
  const name = useWatch({ control, name: "name" });
  const number = useWatch({ control, name: "number" });
  const month = useWatch({ control, name: "expMonth" });
  const year = useWatch({ control, name: "expYear" });
  const cvc = useWatch({ control, name: "cvc" });

  return (
    <main className="main">
      <div className="left-container">
        <Card Name={name} Number={number} Month={month} Year={year} />
        <CardBack Cvc={cvc} />
      </div>
      <div className="right-container">
        {isConfirmed ? (
          <Confirmed />
        ) : (
          <Formulario form={form} setIsConfirmed={setIsConfirmed} />
        )}
      </div>
    </main>
  );
}

export default PayPage;
