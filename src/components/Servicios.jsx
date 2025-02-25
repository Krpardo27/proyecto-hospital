import React, { useEffect, useState } from "react";
import ServiciosList from "./ServiciosList";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("./servicios.json")
      .then((response) => response.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error fetching servicios:", error));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
      {servicios.map((service, id) => (
        <ServiciosList key={id} service={service} />
      ))}
    </div>
  );
};

export default Servicios;
