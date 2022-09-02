import "./Summary.css";

import Movements from "./../movements/Movements";

const Summary = (props) => {
  return (
    <div className="summary">
      <div className="summary__title">{props.month}</div>

      <div className="summary__content">
        <div className="summary__resumme--title">Resumen</div>
        <div className="summary__resumme">
          <div className="summary__resume-row">
            <div className="summary__resume-item">
              TDC {props.monthData.tdc.once || "0 $"}
            </div>
            <div className="summary__resume-item">
              Deudas {props.monthData.debt.once || "0 $"}
            </div>
          </div>

          <div className="summary__resume-row">
            <div className="summary__resume-item">
              Efectivo {props.monthData.cash.once || "0 $"}
            </div>
            <div className="summary__resume-item">
              Banco {props.monthData.bank.repeat || "0 $"}
            </div>
          </div>
        </div>

        <div className="summary__movements">
          <div className="summary__movements-title">Movimientos</div>
          <Movements movements={props.movements} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
