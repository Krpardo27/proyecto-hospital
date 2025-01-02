import React, { useContext } from "react";
import DoctorCard from "../components/DoctorCard";

const EquipoMedico = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h2>Nuestro Equipo Médico</h2>
        <DoctorCard />
      </div>
    </React.Fragment>
  );
};

export default EquipoMedico;
