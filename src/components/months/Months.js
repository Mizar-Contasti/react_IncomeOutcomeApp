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

  const retrieveMonth = (e) => {
    let monthValue = e.target.innerText;
    console.log(monthValue);

    // props.onSaveMonth(monthValue);
  };

  return (
    <div className="months">
      {months.map((mes) => (
        <Month onClick={retrieveMonth} name={mes - 1} key={mes} />
      ))}
    </div>
  );
};

export default Months;
