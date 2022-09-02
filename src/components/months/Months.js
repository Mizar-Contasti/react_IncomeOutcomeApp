import "./Months.css";

import Month from "./Month";

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

  return (
    <div className="months">
      {months.map((mes) => (
        <Month onSaveMonth={monthHandler} name={mes - 1} key={mes - 1} />
      ))}
    </div>
  );
};

export default Months;
