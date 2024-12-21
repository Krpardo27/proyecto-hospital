import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DoctoresContext = createContext();

// Componente para proveer el contexto
export const DoctoresProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("Datos del JSON:", doctores);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const obtenerDoctores = async () => {
      try {
        const url = "./doctores.json";
        const respuesta = await fetch(url);
        console.log("Respuesta:", respuesta);

        if (!respuesta.ok) {
          throw new Error("Network response was not ok");
        }
        const resultado = await respuesta.json();
        console.log("Datos del JSON:", resultado);
        setDoctores(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDoctores();
  }, []);

  const showDoctorDetails = (doctorId) => {
    const doctor = doctores.find((doc) => doc.id === doctorId);
    if (doctor) {
      setSelectedDoctor(doctor);
      toggleModal();
    } else {
      console.error(`Doctor con id ${doctorId} no encontrado`);
    }
  };

  return (
    <DoctoresContext.Provider
      value={{
        doctores,
        selectedDoctor,
        showDoctorDetails,
        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </DoctoresContext.Provider>
  );
};

DoctoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
