import "./Navbar.css";

import Months from "../../months/Months";

const Navbar = (props) => {
  const getMonth = (e) => {
    // console.log(e);
    props.onGetMonth(e);
  };

  return (
    <div className="navbar">
      <div className="navbar__title"> Title</div>
      <Months onSaveMonth={getMonth} />
    </div>
  );
};

export default Navbar;
