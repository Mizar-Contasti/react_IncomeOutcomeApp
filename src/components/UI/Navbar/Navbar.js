import "./Navbar.css";

import Months from "../../months/Months";

const Navbar = (props) => {
  const monthHandler = (e) => {
    props.onSaveMonth(e);
  };

  return (
    <div className="navbar">
      <div className="navbar__title">Meses</div>
      <Months onSaveMonth={monthHandler} />
    </div>
  );
};

export default Navbar;
