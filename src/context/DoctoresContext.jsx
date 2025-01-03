import React, { createContext, useState, useEffect } from "react";

export const DoctoresContext = createContext();

export const DoctoresProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    setIsLoading(true); // Mostrar loader al iniciar la carga
    fetch("./doctores.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setDoctores(data);
          const especialidadesUnicas = [
            ...new Set(data.map((doctor) => doctor.especialidad)),
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
  

  /*
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
