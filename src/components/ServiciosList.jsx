import React from "react";

const ServiciosList = ({ service }) => {
  const { servicio, disponible, descripcion } = service;

  return (
    <li className="list-none bg-gray-200 p-4">
      <h3>{servicio}</h3>
    </li>
  );
};

export default ServiciosList;
