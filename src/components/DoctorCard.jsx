import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DoctoresContext } from "../context/DoctoresContext";

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
      <div className="flex justify-end w-full">
        <select
          name="especialidad"
          id="especialidad"
          value={especialidadSeleccionada}
          onChange={(e) => handleSpecialtyChange(e.target.value)}
          className="mt-1 border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

        >
          <option value="">Todas las especialidades</option>
          {especialidades.map((especialidad, id) => (
            <option key={id} value={especialidad}>
              {especialidad}
            </option>
          ))}
        </select>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="text-center">Cargando...</div> // Mostrar loader mientras se cargan los datos
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="text-center p-5">
                <h5 className="text-lg font-bold text-gray-900">{doctor.nombre}</h5>
                <p className="text-sm text-gray-600">{doctor.especialidad}</p>
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
