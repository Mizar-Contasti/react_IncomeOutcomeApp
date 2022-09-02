// import { useState } from "react";

import months from "./../../months.json";

const Month = (props) => {
  let allMonths = months;

  const monthHandler = (e) => {
    let monthValue = e.target.innerText;
    // console.log(e);
    // console.log(monthValue);
    // console.log(e.target);
    props.onSaveMonth(monthValue);
  };

  return (
    <div
      className="month"
      key={props.id}
      id={props.id}
      value={props.id}
      onClick={monthHandler}
    >
      <div className="month__wrapper">{allMonths[props.name]}</div>
    </div>
  );
};

export default Month;
