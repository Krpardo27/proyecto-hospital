import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ServiciosContext = createContext();

// Componente para proveer el contexto
export const ServiciosProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  console.log("Servicios:", servicios);

  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const url = "./servicios.json";
        const respuesta = await fetch(url);
        console.log("Servicios:", servicios);

        if (!respuesta.ok) {
          throw new Error("Network response was not ok");
        }
        const resultado = await respuesta.json();
        console.log("Datos del JSON:", resultado);
        setServicios(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerServicios();
  }, []);

  return (
    <ServiciosContext.Provider
      value={{
        servicios,
      }}
    >
      {children}
    </ServiciosContext.Provider>
  );
};

ServiciosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

