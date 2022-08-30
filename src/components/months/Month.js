// import { useState } from "react";

const Month = (props) => {
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

  const monthHandler = (e) => {
    let monthValue = e.target.innerText;
    console.log(e.target);
    props.onSaveMonth(monthValue);
  };

  return (
    <div className="month" key={props.id} onClick={monthHandler}>
      <div className="month__wrapper">{allMonths[props.name]}</div>
    </div>
  );
};

export default Month;
