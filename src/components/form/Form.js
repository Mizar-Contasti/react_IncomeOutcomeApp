import "./Form.css";

let months;

const Form = () => {
  return (
    <form className="form" action="none">
      <div className="form-title">Registrar Movimiento</div>

      <div className="form-column">
        <label className="form-label" for="concept">
          Concepto:
        </label>
        <input className="form-text" type="text" id="concept" name="concept" />
      </div>

      <div className="form-column">
        <label className="form-label" for="amount">
          Cantidad:
        </label>
        <input className="form-text" type="number" id="amount" name="amount" />
      </div>

      <div className="form-column">
        <label className="form-label" for="description">
          Descripcion:
        </label>
        <input
          className="form-text"
          type="text"
          id="description"
          name="description"
        />
      </div>

      <div className="form-column">
        {/* <label className="form-label" for="month">
          Mes:
        </label> */}
        {/* <input className="form-text" type="text" id="month" name="month" /> */}

        {/* <select name="select">
          {months.map((month) => {
            <option value={`${month.name}`}>{`${month.name}`}</option>;
          })}
        </select> */}

        <label className="form-label" for="month">
          Mes:
        </label>

        <select className="form-text" name="month">
          <option value="Enero">Enero</option>
          <option value="Febrero">Febrero</option>
          <option value="Marzo">Marzo</option>
          <option value="Abril">Abril</option>
          <option value="Mayo">Mayo</option>
          <option value="Junio">Junio</option>
          <option value="Julio">Julio</option>
          <option value="Agosto">Agosto</option>
          <option value="Septiembre">Septiembre</option>
          <option value="Octubre">Octubre</option>
          <option value="Noviembre">Noviembre</option>
          <option value="Diciembre">Diciembre</option>
        </select>
      </div>

      <div className="form-row">
        <input
          className="form-radio"
          type="radio"
          id="ingreso"
          name="behavior"
          value="ingreso"
        />
        <label for="ingreso">Ingreso</label>
        <input
          className="form-radio"
          type="radio"
          id="gasto"
          name="behavior"
          value="gasto"
        />
        <label for="gasto">Gasto</label>
      </div>

      <div className="form-row">
        <input
          className="form-radio"
          type="radio"
          id="Fijo"
          name="ocurrency"
          value="Fijo"
        />
        <label for="Fijo">Fijo</label>
        <input
          className="form-radio"
          type="radio"
          id="Variable"
          name="ocurrency"
          value="Variable"
        />
        <label for="Variable">Variable</label>
      </div>
      <div className="form-button">
        <input
          className="input-button"
          type="submit"
          value="Registrar Movimiento"
        ></input>
      </div>
    </form>
  );
};
export default Form;
