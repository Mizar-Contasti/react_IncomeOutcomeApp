import "./Navbar.css";

import Months from "../../months/Months";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__title">Meses</div>
      <Months />
    </div>
  );
};

export default Navbar;
