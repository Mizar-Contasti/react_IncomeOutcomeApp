import "./Summary.css";
import moment from "moment";
import { useState } from "react";

import data from "./../../data.json";

const monthSummary = {
  Enero: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Febrero: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Marzo: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Abril: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Mayo: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Junio: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Julio: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Agosto: {
    Gastos: "3000",
    Ingresos: "6000",
  },
  Septiembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Octubre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Noviembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Diciembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
};

const Summary = (props) => {
  console.log(props.summary);
  console.log(data);

  let ingresos = props.summary.Ingresos;
  let gastos = props.summary.Gastos;

  let allMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //   console.log(monthSummary[props.name]);

  const [currentSummary, setSummary] = useState("");

  const displaySummary = (e) => {
    console.log(e);
    // setSummary(monthSummary[month]);
  };

  const getCurrentMonth = () => {
    return allMonths[moment().add(0, "M").format("M") - 1];
  };

  const getCurrentSummary = (type) => {
    if (type === "income") {
      return (
        "Ingresos: $" +
        monthSummary[allMonths[moment().add(0, "M").format("M") - 1]].Ingresos
      );
    } else {
      return (
        "Gastos: $" +
        monthSummary[allMonths[moment().add(0, "M").format("M") - 1]].Gastos
      );
    }
  };

  return (
    <div className="summary">
      <div onChange={displaySummary} className="summary__title">
        {props.name || getCurrentMonth()}
      </div>

      <div className="summary__content">
        <div className="summary__resumme--title">Resumen</div>
        <div className="summary__resumme">
          <div className="summary__content-income">
            {ingresos || getCurrentSummary("income")}
          </div>
          <div className="summary__content-outcome">
            {gastos || getCurrentSummary("outcome")}
          </div>
        </div>

        <div className="summary__movements">
          <div className="summary__movements-title">Movimientos</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
