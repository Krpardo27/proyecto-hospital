import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Modal componente
const Modal = ({ isOpen, onClose, content }) => {
  if (!content) return null;
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Información del Doctor</h2>
        <p>
          <strong>Nombre:</strong> {content.nombre}
        </p>
        <p>
          <strong>Especialidad:</strong> {content.especialidad}
        </p>
        <div>
          <strong>Información Adicional:</strong>
          <ul>
            <li>Horarios: {content.disponibilidad}</li>
            <li>Correo: {content.email}</li>
            <li>Experiencia: {content.experiencia} años</li>
          </ul>
        </div>
        <button onClick={onClose} className="btn btn-secondary">Cerrar</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const styles = {
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    nombre: PropTypes.string,
    especialidad: PropTypes.string,
    disponibilidad: PropTypes.string,
    email: PropTypes.string,
    experiencia: PropTypes.number,
  })
};

export default Modal;