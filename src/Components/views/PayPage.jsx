import React, { useState } from "react";
import "../../styles/PayPage.css";
import Formulario from "../common/Formulario";
import Card from "../common/Card";
import CardBack from "../common/CardBack";
import Confirmed from "../common/Confirmed";

function PayPage() {
  const [value, setValue] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const [error, setError] = useState({
    name: null,
    number: null,
    expMonth: null,
    expYear: null,
    cvc: null,
  });

  const [isBlank, setIsBlank] = useState({
    name: false,
    number: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const setTarget = (e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validateInputs = () => {
    const { name, number, expMonth, expYear, cvc } = value;
    if (name.trim().length !== 0) {
      setIsBlank((prev) => {
        return { ...prev, name: false };
      });
      var regex =
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      regex.test(name)
        ? setError((prev) => {
            return { ...prev, name: false };
          })
        : setError((prev) => {
            return { ...prev, name: true };
          });
    } else {
      setIsBlank((prev) => {
        return { ...prev, name: true };
      });
      setError((prev) => {
        return { ...prev, name: false };
      });
    }
    if (number.trim().length !== 0) {
      setIsBlank((prev) => {
        return { ...prev, number: false };
      });
      var regex = /^(\d\s?){15,16}$/;
      regex.test(number)
        ? setError((prev) => {
            return { ...prev, number: false };
          })
        : setError((prev) => {
            return { ...prev, number: true };
          });
    } else {
      setIsBlank((prev) => {
        return { ...prev, number: true };
      });
      setError((prev) => {
        return { ...prev, number: false };
      });
    }

    if (expMonth.trim().length !== 0) {
      setIsBlank((prev) => {
        return { ...prev, expMonth: false };
      });
      var regex = /^(0[1-9]|1[012])$/;
      regex.test(expMonth)
        ? setError((prev) => {
            return { ...prev, expMonth: false };
          })
        : setError((prev) => {
            return { ...prev, expMonth: true };
          });
    } else {
      setIsBlank((prev) => {
        return { ...prev, expMonth: true };
      });
      setError((prev) => {
        return { ...prev, expMonth: false };
      });
    }

    if (expYear.trim().length !== 0) {
      setIsBlank((prev) => {
        return { ...prev, expYear: false };
      });
      var regex = /^(2[1-9]|0[012])$/;
      regex.test(expYear)
        ? setError((prev) => {
            return { ...prev, expYear: false };
          })
        : setError((prev) => {
            return { ...prev, expYear: true };
          });
    } else {
      setIsBlank((prev) => {
        return { ...prev, expYear: true };
      });
      setError((prev) => {
        return { ...prev, expYear: false };
      });
    }

    if (cvc.trim().length !== 0) {
      setIsBlank((prev) => {
        return { ...prev, cvc: false };
      });
      var regex = /^[0-9]{3,4}$/;
      regex.test(cvc)
        ? setError((prev) => {
            return { ...prev, cvc: false };
          })
        : setError((prev) => {
            return { ...prev, cvc: true };
          });
    } else {
      setIsBlank((prev) => {
        return { ...prev, cvc: true };
      });
      setError((prev) => {
        return { ...prev, cvc: false };
      });
    }
    console.log(error);
  };

  const confirm = () => {
    setIsConfirmed(true);
  };

  return (
    <main className="main">
      <div className="left-container">
        <Card
          Name={value.name}
          Number={value.number}
          Month={value.expMonth}
          Year={value.expYear}
        />
        <CardBack Cvc={value.cvc} />
      </div>
      <div className="right-container">
        {isConfirmed ? (
          <Confirmed />
        ) : (
          <Formulario
            setTarget={setTarget}
            validateInputs={validateInputs}
            number={value.number}
            error={error}
            isBlank={isBlank}
          />
        )}
      </div>
    </main>
  );
}

export default PayPage;
