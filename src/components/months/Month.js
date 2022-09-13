// import { useState } from "react";

import months from "./../../months.json";

const Month = (props) => {
  let allMonths = months;
  const monthHandler = (e) => {
    let monthValue;
    if (e.target.classList.contains("month__amount")) {
      console.log("contains amount");
      monthValue = e.target.parentElement.children[0].innerText;
    } else {
      monthValue = e.target.innerText;
    }
    props.onSaveMonth(monthValue);
  };

  let addedClass;
  let selector;

  if (props.amount >= 1) {
    addedClass = "positive";
    selector = "+";
  } else if (props.amount < 0) {
    addedClass = "negative";
    selector = "";
  } else {
    addedClass = "";
    selector = "";
  }

  return (
    <div
      className="month"
      key={props.id}
      id={props.id}
      value={props.id}
      onClick={monthHandler}
    >
      <div className={`month__wrapper  ${addedClass} `}>
        <div className="month__title"> {allMonths[props.name]}</div>
        <div className={`month__amount`}>
          {" "}
          {selector} {props.amount}
        </div>
      </div>
    </div>
  );
};

export default Month;
