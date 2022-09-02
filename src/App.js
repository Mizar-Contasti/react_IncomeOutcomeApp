import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/content/Content";
import Header from "./components/UI/header/Header";
import { useState } from "react";
import data from "./data.json";

import months from "./months.json";

import moment from "moment";

// console.log(months);

const App = () => {
  const [month, setMonth] = useState(
    months[moment().add(0, "M").format("M") - 1]
  );

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

  const filterMovements = (movements) => {
    return movements.map((res) => {
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

  let movements = filterMovements(data.Movements);
  // console.log(movements);

  let monthData = {
    tdc: {
      once: calc(filterGroup(data.Movements, "tdc", month, "once")),
      repeat: calc(filterGroup(data.Movements, "tdc", month, "repeat")),
    },
    bank: {
      once: calc(filterGroup(data.Movements, "bank", month, "once")),
      repeat: calc(filterGroup(data.Movements, "bank", month, "repeat")),
    },
    cash: {
      once: calc(filterGroup(data.Movements, "cash", month, "once")),
      repeat: calc(filterGroup(data.Movements, "cash", month, "repeat")),
    },
    debt: {
      once: calc(filterGroup(data.Movements, "debt", month, "once")),
      repeat: calc(filterGroup(data.Movements, "debt", month, "repeat")),
    },
  };

  // console.log(monthData);
  // const [tdc, setTdc] = useState(monthData.tdc.once);
  // const [bank, setBank] = useState(monthData.bank.repeat);
  // const [cash, setCash] = useState(monthData.cash.once);
  // const [debt, setDebt] = useState(monthData.debt.once);

  // const changeData = () => {
  //   console.log("data changed");
  //   // setTitle(props.month);
  //   setTdc(monthData.tdc.once);
  //   setBank(monthData.bank.repeat);
  //   setCash(monthData.cash.once);
  //   setDebt(monthData.debt.once);
  // };

  const monthHandler = (month) => {
    setMonth(month);
  };

  return (
    <div className="main">
      <div className="head">
        <Header />
      </div>

      <div className="body">
        <Content month={month} monthData={monthData} movements={movements} />

        <Navbar onSaveMonth={monthHandler} />
      </div>
    </div>
  );
};

export default App;
