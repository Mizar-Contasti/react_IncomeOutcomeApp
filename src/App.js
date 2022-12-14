import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/content/Content";
import Header from "./components/UI/header/Header";
import { useState } from "react";
import data from "./data.json";

// import Modal from "./components/UI/modal/Modal";
import Form from "./components/form/Form";

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

  const filterMovements = (movements, month) => {
    let result = movements.filter((item) => item.month === month);

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

  let movements = filterMovements(data.Movements, month);
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

  const monthHandler = (month) => {
    setMonth(month);
  };

  // console.log(movements);

  // calc all month amount

  const filterMonthsMovements = (movements) => {
    return movements.map((res) => {
      if (res.attr === "outcome") {
        return { ...res, amount: -res.amount };
      } else {
        return res;
      }
    });
  };

  const monthsMovements = filterMonthsMovements(data.Movements);
  // console.log(monthsMovements);

  // let monthAmount = {};

  return (
    <div className="main">
      {/* <Modal /> */}
      <div className="head">
        <Header />
      </div>

      <div className="body">
        <Content month={month} monthData={monthData} movements={movements} />

        <Navbar onSaveMonth={monthHandler} monthsMovements={monthsMovements} />

        <Form />
      </div>
    </div>
  );
};

export default App;
