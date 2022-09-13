import "./Months.css";

import Month from "./Month";
import allMonths from "./../../months.json";

import moment from "moment";

const Months = (props) => {
  let months = [
    moment().add(0, "M").format("M"),
    moment().add(1, "M").format("M"),
    moment().add(2, "M").format("M"),
    moment().add(3, "M").format("M"),
    moment().add(4, "M").format("M"),
    moment().add(5, "M").format("M"),
    moment().add(6, "M").format("M"),
  ];

  // months.map((month) => {
  //   return console.log(month);
  // });

  const monthHandler = (e) => {
    // console.log(e);
    props.onSaveMonth(e);
  };

  // console.log(allMonths);

  const calc = (movements, month) => {
    let res = movements.filter((item) => item.month === month);

    let amount = 0;
    let total = 0;

    res.map((res) => {
      return (amount += res.amount);
    });

    total = amount.toFixed(2);

    return total;
  };

  // console.log(calc(props.monthsMovements, "Septiembre"));

  return (
    <div className="months">
      {months.map((mes) => (
        // console.log(allMonths[mes - 1]),
        <Month
          onSaveMonth={monthHandler}
          name={mes - 1}
          key={mes - 1}
          // amount={123}
          amount={calc(props.monthsMovements, allMonths[mes - 1])}
        />
      ))}
    </div>
  );
};

export default Months;
