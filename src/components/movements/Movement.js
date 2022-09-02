import "./Movements.css";

const Movement = (props) => {
  return (
    <div className="movement" key={Math.random()}>
      <div className="movement__item">{props.name}</div>
      <div className="movement__item">{props.amount}</div>
      <div className="movement__item">{props.ocurrence}</div>
      <div className="movement__item">{props.type}</div>
    </div>
  );
};

export default Movement;
