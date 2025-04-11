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

  const [doctorToEdit, setDoctorToEdit] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/doctores`)
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

  // const getDoctores = () => {
  //   fetch("http://localhost:5000/doctores", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.text().then((text) => {
  //           throw new Error(`Error ${response.status}: ${text}`);
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const doctoresData = Array.isArray(data) ? data : [];
  //       setObtenerDoctoresDB(doctoresData);
  //       localStorage.setItem("doctores", JSON.stringify(doctoresData));
  //     })
  //     .catch((error) => console.error("Error:", error.message));
  // };

  const getDoctores = () => {
    fetch(`${API_URL}/doctores`, {
      // Usa la URL de la API de producción
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        const doctoresData = Array.isArray(data) ? data : [];
        setObtenerDoctoresDB(doctoresData);
        localStorage.setItem("doctores", JSON.stringify(doctoresData));
      })
      .catch((error) => console.error("Error:", error.message));
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
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.text().then((text) => {
  //           throw new Error(`Error ${response.status}: ${text}`);
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setObtenerDoctoresDB((prevDoctores) => {
  //         const updatedDoctores = [data, ...prevDoctores];
  //         localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
  //         return updatedDoctores;
  //       });
  //     })
  //     .catch((error) => console.error("Error:", error.message));
  // };

  // eliminar un doctor
  // const deleteDoctor = (id) => {
  //   fetch(`http://localhost:5000/doctores/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => {
  //       setObtenerDoctoresDB((prevDoctores) => {
  //         const updatedDoctores = prevDoctores.filter(
  //           (doctor) => doctor.id !== id
  //         );
  //         localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
  //         return updatedDoctores;
  //       });
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // editar información de un doctor
  // const editDoctor = (doctor) => {
  //   // Verificar si el doctor existe antes de intentar actualizarlo
  //   fetch(`http://localhost:5000/doctores/${doctor.id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Doctor with ID ${doctor.id} not found.`);
  //       }
  //       return response.json();
  //     })
  //     .then(() => {
  //       // Si el doctor existe, proceder con la actualización
  //       return axios.put(`http://localhost:5000/doctores/${doctor.id}`, doctor);
  //     })
  //     .then((response) => {
  //       setObtenerDoctoresDB((prevDoctores) => {
  //         const updatedDoctores = prevDoctores.map((doc) =>
  //           doc.id === response.data.id ? response.data : doc
  //         );
  //         localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
  //         return updatedDoctores;
  //       });
  //       setDoctorToEdit(null); // Limpiar el estado de doctorToEdit después de la edición
  //     })
  //     .catch((error) => console.error("Error:", error.message));
  // };
  // Agregar un nuevo doctor
  const addDoctor = (newDoctor) => {
    // Verificar si el ID del doctor ya existe
    const doctorExists = doctores.find(
      (doctor) => doctor.id === newDoctor.id || doctor.email === newDoctor.email
    );
    if (doctorExists) {
      console.warn(`Doctor with ID ${newDoctor.id} already exists.`);
      return;
    }

    // Hacer la solicitud POST a la API de producción
    fetch(`${API_URL}/doctores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctor),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        setObtenerDoctoresDB((prevDoctores) => {
          const updatedDoctores = [data, ...prevDoctores];
          localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
          return updatedDoctores;
        });
      })
      .catch((error) => console.error("Error:", error.message));
  };

  // Eliminar un doctor
  const deleteDoctor = (id) => {
    fetch(`${API_URL}/doctores/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setObtenerDoctoresDB((prevDoctores) => {
          const updatedDoctores = prevDoctores.filter(
            (doctor) => doctor.id !== id
          );
          localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
          return updatedDoctores;
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  // Editar información de un doctor
  const editDoctor = (doctor) => {
    // Verificar si el doctor existe antes de intentar actualizarlo
    fetch(`${API_URL}/doctores/${doctor.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Doctor with ID ${doctor.id} not found.`);
        }
        return response.json();
      })
      .then(() => {
        // Si el doctor existe, proceder con la actualización
        return axios.put(`${API_URL}/doctores/${doctor.id}`, doctor);
      })
      .then((response) => {
        setObtenerDoctoresDB((prevDoctores) => {
          const updatedDoctores = prevDoctores.map((doc) =>
            doc.id === response.data.id ? response.data : doc
          );
          localStorage.setItem("doctores", JSON.stringify(updatedDoctores));
          return updatedDoctores;
        });
        setDoctorToEdit(null); // Limpiar el estado de doctorToEdit después de la edición
      })
      .catch((error) => console.error("Error:", error.message));
  };

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
        obtenerDoctoresDB,
        addDoctor,
        deleteDoctor,
        editDoctor,
        doctorToEdit,
        setDoctorToEdit,
      }}
    >
      {children}
    </DoctoresContext.Provider>
  );
};

DoctoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
