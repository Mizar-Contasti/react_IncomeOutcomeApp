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

  let { Incomes, Outcomes } = monthData;

  const calcIncomes = (Incomes) => {
    let baseIncome = 0;
    for (let i = 0; i < Incomes.length; i++) {
      baseIncome += Incomes[i].amount;
    }
    return baseIncome;
  };

  const calcOutcomes = (Outcomes) => {
    let baseOutcome = 0;
    for (let i = 0; i < Outcomes.length; i++) {
      baseOutcome += Outcomes[i].amount;
    }
    return baseOutcome;
  };

  const [title, setTitle] = useState("");

  const titleHandler = () => {
    setTitle(props.name);
    console.log(props.name);
  };

  const [currentOutcomes, setOutcomes] = useState(calcOutcomes(Outcomes));
  const [currentIncomes, setIncomes] = useState(calcIncomes(Incomes));

  const getCurrentMonth = () => {
    return allMonths[moment().add(0, "M").format("M") - 1];
  };

  const getCurrentSummary = (type) => {
    if (type === "income") {
      return `Ingresos: $ ${calcIncomes(Incomes)}`;
    } else {
      return `Gastos: $ ${calcOutcomes(Outcomes)}`;
    }
  };

  const IncomeHandler = (e) => {
    setIncomes(getCurrentSummary("income"));
  };

  const OutcomeHandler = (e) => {
    setOutcomes(getCurrentSummary("outcome"));
  };

  return (
    <div className="summary">
      <div onClick={titleHandler} className="summary__title">
        {title || getCurrentMonth()}
      </div>

      <div className="summary__content">
        <div className="summary__resumme--title">Resumen</div>
        <div className="summary__resumme">
          <div className="summary__content-income">
            {currentIncomes || IncomeHandler}
          </div>
          <div className="summary__content-outcome">
            {currentOutcomes || OutcomeHandler}
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
