import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorCard = () => {
  const {
    doctores,
    especialidades,
    handleSpecialtyChange,
    filteredDoctors,
    especialidadSeleccionada,
    isLoading,
  } = useContext(DoctoresContext);

  console.log(doctores);

  return (
    <React.Fragment>
      <div className="flex justify-end w-full">
        <select
          name="especialidad"
          id="especialidad"
          value={especialidadSeleccionada}
          onChange={(e) => handleSpecialtyChange(e.target.value)}
          className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-md"
        >
          <option value="">Todas las especialidades</option>
          {especialidades.map((especialidad, id) => (
            <option key={id} value={especialidad}>
              {especialidad}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 mt-5">
        {isLoading ? (
          <div className="text-center">Cargando...</div>
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md ">
              <button 
                
                className="flex items-center justify-center w-full p-4">
                <div className="p-5 text-center">
                  <h5 className="text-lg font-bold text-gray-900">
                    {doctor.nombre}
                  </h5>
                  <p className="text-sm text-gray-600">{doctor.especialidad}</p>
                </div>
              </button>
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
