import "./Summary.css";
import moment from "moment";
import { useState } from "react";

import data from "./../../data.json";

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

const Summary = (props) => {
  let monthData =
    data.Movements[0].Monthly[0][
      `${allMonths[moment().add(0, "M").format("M") - 1]}`
    ][0];

  return (
    <div className="summary">
      <div className="summary__title">Titulo</div>

      <div className="summary__content">
        <div className="summary__resumme--title">Resumen</div>
        <div className="summary__resumme">
          <div className="summary__content-income">Ingresos 8000</div>
          <div className="summary__content-outcome">Gastos 600</div>
        </div>

        <div className="summary__movements">
          <div className="summary__movements-title">Movimientos</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
