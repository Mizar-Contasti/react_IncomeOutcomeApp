import "./Movements.css";

const Movement = (props) => {
  let amount;

  if (props.amount > 0) {
    amount = `+${props.amount}`;
  } else {
    amount = props.amount;
  }

  return (
    <div className="movement" key={Math.random()}>
      <div className="movement__item item-1">{props.name}</div>
      <div className="movement__item">{amount}</div>
      <div className="movement__item">{props.ocurrence}</div>
      <div className="movement__item">{props.type}</div>
    </div>
  );
};

export default Movement;
