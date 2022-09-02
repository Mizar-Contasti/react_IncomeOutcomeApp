import "./Header.css";

const Header = (props) => {
  return <div className="header">{props.month || "Header!"}</div>;
};

export default Header;
