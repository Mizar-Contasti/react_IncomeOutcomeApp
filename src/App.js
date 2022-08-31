import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/content/Content";
import Header from "./components/UI/header/Header";
import { useState } from "react";

const monthSummary = {
  Enero: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Febrero: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Marzo: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Abril: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Mayo: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Junio: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Julio: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Agosto: {
    Gastos: "3000",
    Ingresos: "6000",
  },
  Septiembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Octubre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Noviembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
  Diciembre: {
    Gastos: "1000",
    Ingresos: "2000",
  },
};

const App = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const retrieveMonth = (e) => {
    setTitle(e);
    setSummary(monthSummary[e]);
  };

  return (
    <div className="main">
      <div className="head">
        <Header />
      </div>

      <div className="body">
        <Content name={title} monthContent={summary} />

        <Navbar onGetMonth={retrieveMonth} />
      </div>
    </div>
  );
};

export default App;
