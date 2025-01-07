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
    <div className="container">
      <div className="row">
        {servicios.map((service, id) => (
          <div className="col-md-4 g-2" key={id}>
            <ServiciosList service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
