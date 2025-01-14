import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const DoctoresContext = createContext();

export const DoctoresProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [obtenerDoctoresDB, setObtenerDoctoresDB] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/doctores.json")
      .then((response) => {
        const doctoresData = Array.isArray(response.data) ? response.data : [];
        setDoctores(doctoresData);
        localStorage.setItem("doctores", JSON.stringify(doctoresData));
        const especialidadesUnicas = [
          ...new Set(doctoresData.map((doctor) => doctor.especialidad)),
        ];
        setEspecialidades(especialidadesUnicas);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctores:", error);
        setIsLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("http://localhost:5000/doctores")
  //     .then((response) => {
  //       const doctoresData = Array.isArray(response.data) ? response.data : [];
  //       setDoctores(doctoresData);
  //       localStorage.setItem("doctores", JSON.stringify(doctoresData));
  //       const especialidadesUnicas = [
  //         ...new Set(doctoresData.map((doctor) => doctor.especialidad)),
  //       ];
  //       setEspecialidades(especialidadesUnicas);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching doctores:", error);
  //       setIsLoading(false);
  //     });
  // }, []);

   const filteredDoctors = doctores.filter((doctor) =>
    especialidadSeleccionada
      ? doctor.especialidad === especialidadSeleccionada
      : true
  );

  const handleSpecialtyChange = (especialidad) => {
    setIsLoading(true);
    setEspecialidadSeleccionada(especialidad);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getDoctores = () => {
    fetch("http://localhost:5000/doctores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const doctoresData = Array.isArray(data) ? data : [];
        setObtenerDoctoresDB(doctoresData);
        localStorage.setItem("doctores", JSON.stringify(doctoresData));
      })
      .catch((error) => console.error("Error:", error));
  };




  // const addDoctor = (newDoctor) => {
  //   // Verificar si el ID del doctor ya existe
  //   const doctorExists = doctores.find(
  //     (doctor) => doctor.id === newDoctor.id || doctor.email === newDoctor.email
  //   );
  //   if (doctorExists) {
  //     console.warn(`Doctor with ID ${newDoctor.id} already exists.`);
  //     return;
  //   }

  //   // Hacer la solicitud POST a json-server
  //   fetch("http://localhost:5000/doctores", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newDoctor),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDoctores((prevDoctores) => {
  //         const updatedDoctores = [data, ...prevDoctores];
  //         localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
  //         return updatedDoctores;
  //       });
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  return (
    <DoctoresContext.Provider
      value={{
        doctores,
        especialidades,
        especialidadSeleccionada,
        isLoading,
        handleSpecialtyChange,
        filteredDoctors,
        getDoctores,
        obtenerDoctoresDB
      }}
    >
      {children}
    </DoctoresContext.Provider>
  );
};

DoctoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};