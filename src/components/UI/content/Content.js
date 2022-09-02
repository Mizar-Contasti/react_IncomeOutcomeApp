import "./Content.css";

import Summary from "../../summary/Summary";

const Content = (props) => {
  console.log(props);

  return (
    <div className="content">
      <div className="content__title">{"Estado de Cuenta"}</div>
      <div className="content__summary">
        <Summary month={props.month} monthData={props.monthData} />
      </div>
    </div>
  );
};

export default Content;
