import React, { Profiler } from "react";
import PropTypes from "prop-types";
import withDataFetching from "../hocs/withDataFetching";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Componente que muestra la lista de doctores
const ServiceList = ({ data, loading, error }) => {

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("data:", data);

  const onRenderCallback = (
    id, // Nombre del Profiler (OptimizedEventList)
    phase, // "mount" o "update"
    actualDuration // Tiempo que tardó en renderizar
    ) => {
    console.log(`${id} (${phase}) tomó ${actualDuration}ms para renderizar.`);
    };
   
  return (
    <Profiler id='ServiceList' onRender={onRenderCallback}>
      <h2>Especialidades Disponibles</h2>
      <ul>
        {data.map((especialidad, index) => (
          <li key={index}>{especialidad.especialidad}</li>
        ))}
      </ul>
    </Profiler>
  );
};

ServiceList.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

ServiceList.defaultProps = {
  data: [],
};

// Usamos el HOC con una URL de ejemplo
const ServiceListWithData = withDataFetching(ServiceList, `${API_BASE_URL}/servicios`);


export default ServiceListWithData;
