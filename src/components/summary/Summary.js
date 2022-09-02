import "./Summary.css";
import moment from "moment";
import { useState } from "react";
import data from "./../../data.json";
import months from "./../../months.json";

const Summary = (props) => {
  // console.log(props);

  const filterGroup = (group, type, month, occurrence) => {
    let result = group.filter(
      (item) =>
        item.type === type &&
        item.month === month &&
        item.occurrence === occurrence
    );
    // eslint-disable-next-line array-callback-return
    return result.map((res) => {
      if (res.attr === "outcome") {
        return { ...res, amount: -res.amount };
      } else {
        return res;
      }
    });
  };

  const calc = (group) => {
    let baseIncome = 0;
    for (let i = 0; i < group.length; i++) {
      baseIncome += group[i].amount;
    }
    return baseIncome;
  };

  let monthData = {
    tdc: {
      once: calc(filterGroup(data.Movements, "tdc", props.month, "once")),
      repeat: calc(filterGroup(data.Movements, "tdc", props.month, "repeat")),
    },
    bank: {
      once: calc(filterGroup(data.Movements, "bank", props.month, "once")),
      repeat: calc(filterGroup(data.Movements, "bank", props.month, "repeat")),
    },
    cash: {
      once: calc(filterGroup(data.Movements, "cash", props.month, "once")),
      repeat: calc(filterGroup(data.Movements, "cash", props.month, "repeat")),
    },
    debt: {
      once: calc(filterGroup(data.Movements, "debt", props.month, "once")),
      repeat: calc(filterGroup(data.Movements, "debt", props.month, "repeat")),
    },
  };

  // console.log(monthData);
  // const [title, setTitle] = useState(props.month);
  const [tdc, setTdc] = useState(monthData.tdc.once);
  const [bank, setBank] = useState(monthData.bank.repeat);
  const [cash, setCash] = useState(monthData.cash.once);
  const [debt, setDebt] = useState(monthData.debt.once);

  const changeData = () => {
    console.log("data changed");
    // setTitle(props.month);
    setTdc(monthData.tdc.once);
    setBank(monthData.bank.repeat);
    setCash(monthData.cash.once);
    setDebt(monthData.debt.once);
  };

  // const onChangeMonth = () => {};

  return (
    <div className="summary">
      <div className="summary__title" onChange={changeData}>
        {props.month}
      </div>

      <div className="summary__content">
        <div className="summary__resumme--title">Resumen</div>
        <div className="summary__resumme">
          <div className="summary__resume-row">
            <div className="summary__resume-item">TDC {tdc || "0 $"}</div>
            <div className="summary__resume-item">Deudas {debt || "0 $"}</div>
          </div>

          <div className="summary__resume-row">
            <div className="summary__resume-item">Efectivo {cash || "0 $"}</div>
            <div className="summary__resume-item">Banco {bank || "0 $"}</div>
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
