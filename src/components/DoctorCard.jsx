import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DoctoresContext } from "../context/DoctoresContext";
import "../index.css";

const DoctorCard = React.memo(function DoctorCard({ doctores }) {
  const { showDoctorDetails } = useContext(DoctoresContext);

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="row">
          <div className="grid-container">
            {doctores.map((doctor) => (
              <div key={doctor.id} className="card">
                <div className="card-body">
                  <h2 className="card-title">{doctor.nombre}</h2>
                  <p className="card-text">{doctor.especialidad}</p>
                </div>
                <button
                  onClick={() => showDoctorDetails(doctor.id)}
                  className="btn btn-secondary"
                >
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

DoctorCard.propTypes = {
  doctores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DoctorCard;
