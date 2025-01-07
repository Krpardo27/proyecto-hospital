import React from "react";

const ServiciosList = ({ service }) => {
  const { servicio, disponible, descripcion } = service;

  return (
    <li className="card">
      <h3>{servicio}</h3>
    </li>
  );
};

export default ServiciosList;
