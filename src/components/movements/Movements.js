import "./Movements.css";
import Movement from "./Movement";

const Movements = (props) => {
  console.log(props.movements);
  return (
    <div className="movements">
      <div className="movements__legend">
        <div className="movements__legend-item">Nombre</div>
        <div className="movements__legend-item">Cantidad</div>
        <div className="movements__legend-item">Concurrencia</div>
        <div className="movements__legend-item">Tipo</div>
      </div>
      {props.movements.map((x) => (
        <Movement
          name={x.name}
          amount={x.amount}
          ocurrence={x.occurrence}
          type={x.type}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default Movements;
