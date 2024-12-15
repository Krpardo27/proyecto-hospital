import React, { useEffect, useState } from "react";

const DoctorCard = ({ doctor }) => {
  const { nombre } = doctor;

  return (
    <div>
      <h3>{nombre}</h3>
    </div>
  );
};

export default DoctorCard;
