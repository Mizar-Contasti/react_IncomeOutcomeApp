import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/content/Content";
import Header from "./components/UI/header/Header";
import { useState } from "react";

import months from "./months.json";

import moment from "moment";

// console.log(months);

const App = () => {
  const [month, setMonth] = useState(
    months[moment().add(0, "M").format("M") - 1]
  );
  const monthHandler = (month) => {
    setMonth(month);

    // update summary
  };

  return (
    <div className="main">
      <div className="head">
        <Header />
      </div>

      <div className="body">
        <Content month={month} />

        <Navbar onSaveMonth={monthHandler} />
      </div>
    </div>
  );
};

export default App;
