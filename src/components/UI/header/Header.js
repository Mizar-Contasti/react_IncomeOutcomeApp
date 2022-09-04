import "./Header.css";
import moment from "moment";

const Header = (props) => {
  const welcomeMessage = () => {
    const hour = moment().hour();
    if (hour >= 6 && hour < 12) {
      return "Buenos días";
    } else if (hour >= 12 && hour < 20) {
      return "Buenas tardes";
    }
    return "Buenas noches";
  };

  return (
    <div className="header">
      <div className="header__welcome">
        <div className="header__welcome-icon">🌙</div>
        <div className="header__welcome-title">{welcomeMessage()}</div>
      </div>
      <div className="header__config">
        <div className="header__config-icon">⚙️</div>
      </div>
    </div>
  );
};

export default Header;
