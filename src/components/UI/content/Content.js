import "./Content.css";

import Summary from "../../summary/Summary";

const Content = (props) => {
  return (
    <div className="content">
      <div className="content__title">Estado de Cuenta</div>
      <div className="content__summary">
        <Summary name={props.name} summary={props.monthContent} />
      </div>
    </div>
  );
};

export default Content;
