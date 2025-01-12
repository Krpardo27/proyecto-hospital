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
    <div className="grid md:grid-cols-4 gap-5">
      {servicios.map((service, id) => (
        <ServiciosList key={id} service={service} />
      ))}
    </div>
  );
};

export default Servicios;
