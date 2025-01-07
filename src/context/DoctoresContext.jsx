import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

export const DoctoresContext = createContext();

export const DoctoresProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true);
    axios.get('./doctores.json')
      .then((response) => {
        setTimeout(() => {
          setDoctores(response.data);
          const especialidadesUnicas = [
            ...new Set(response.data.map((doctor) => doctor.especialidad)),
          ];
          setEspecialidades(especialidadesUnicas);
          setIsLoading(false); // Ocultar loader después de cargar los datos
        }, 2000); // Simular un retraso de 2 segundos
      })
      .catch((error) => {
        console.error("Error fetching doctores:", error);
        setIsLoading(false); // Ocultar loader en caso de error
      });
  }, []);

  // useEffect(() => {
  //   setIsLoading(true); 
  //   fetch("./doctores.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         setDoctores(data);
  //         const especialidadesUnicas = [
  //           ...new Set(data.map((doctor) => doctor.especialidad)),
  //         ];
  //         setEspecialidades(especialidadesUnicas);
  //         setIsLoading(false); // Ocultar loader después de cargar los datos
  //       }, 2000); // Simular un retraso de 2 segundos
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching doctores:", error);
  //       setIsLoading(false); // Ocultar loader en caso de error
  //     });
  // }, []);
  

  /*
    const toggleModal = () => {
  };
  */

  const handleSpecialtyChange = (especialidad) => {
    setIsLoading(true);
    setEspecialidadSeleccionada(especialidad);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simula un retraso de 1 segundo
  };

  const filteredDoctors = doctores.filter((doctor) =>
    especialidadSeleccionada
      ? doctor.especialidad === especialidadSeleccionada
      : true
  );

  return (
    <DoctoresContext.Provider
      value={{
        doctores,
        especialidades,
        handleSpecialtyChange,
        filteredDoctors,
        especialidadSeleccionada,
        isLoading
      }}
    >
      {children}
    </DoctoresContext.Provider>
  );
};

DoctoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

