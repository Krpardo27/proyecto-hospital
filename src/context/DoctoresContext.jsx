import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const DoctoresContext = createContext();

export const DoctoresProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("./doctores.json")
      .then((response) => {
        setTimeout(() => {
          setDoctores(response.data);
          const especialidadesUnicas = [
            ...new Set(response.data.map((doctor) => doctor.especialidad)),
          ];
          setEspecialidades(especialidadesUnicas);
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching doctores:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/doctores")
      .then((response) => response.json())
      .then((data) => setDoctores(data));
  }, []);

  const handleSpecialtyChange = (especialidad) => {
    setIsLoading(true);
    setEspecialidadSeleccionada(especialidad);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const filteredDoctors = doctores.filter((doctor) =>
    especialidadSeleccionada
      ? doctor.especialidad === especialidadSeleccionada
      : true
  );

  const addDoctor = (newDoctor) => {
    // Verificar si el ID del doctor ya existe
    const doctorExists = doctores.find(
      (doctor) => doctor.id === newDoctor.id || doctor.email === newDoctor.email
    );
    if (doctorExists) {
      console.warn(`Doctor with ID ${newDoctor.id} already exists.`);
      return;
    }

    // Hacer la solicitud POST a json-server
    fetch("http://localhost:5000/doctores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctor),
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctores((prevDoctores) => [data, ...prevDoctores]);
      });
  };

  return (
    <DoctoresContext.Provider
      value={{
        doctores,
        especialidades,
        handleSpecialtyChange,
        filteredDoctors,
        especialidadSeleccionada,
        isLoading,
        addDoctor,
      }}
    >
      {children}
    </DoctoresContext.Provider>
  );
};

DoctoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};