import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={`modal ${props.modalState || "modal_inactive"}`}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
