import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../index.css";
import { DoctoresContext } from "../context/DoctoresContext";
import "../styles/Doctores.css";

const DoctorCard = () => {
  const {
    especialidades,
    handleSpecialtyChange,
    filteredDoctors,
    especialidadSeleccionada,
    isLoading,
  } = useContext(DoctoresContext);

  return (
    <React.Fragment>
      <div className="filtro-especialidad">
        <select
          name="especialidad"
          id="especialidad"
          value={especialidadSeleccionada}
          onChange={(e) => handleSpecialtyChange(e.target.value)}
        >
          <option value="">Todas las especialidades</option>
          {especialidades.map((especialidad, id) => (
            <option key={id} value={especialidad}>
              {especialidad}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {isLoading ? (
          <div className="loader">Cargando...</div> // Mostrar loader mientras se cargan los datos
        ) : (
          filteredDoctors.map((doctor) => (
            <div className="col-md-3 mb-3" key={doctor.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{doctor.nombre}</h5>
                  <p className="card-text">{doctor.especialidad}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
