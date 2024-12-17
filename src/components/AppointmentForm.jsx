/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AppointmentForm = ({ doctores }) => {
  const [paciente, setPaciente] = useState({
    name: "",
    especialidad: "",
    email: "",
    fecha: "",
  });

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado: ");
    setPaciente({
      name: "",
      especialidad: "",
      email: "",
      fecha: "",
    });
  };

  return (
    <>
      <div className="container mx-auto">
        <h1>Formulario de citas</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="nombre">Nombre del Paciente:</label>
            <input
              onChange={handleChange}
              // onChange={(e) => setPaciente({ ...paciente, name: e.target.value })}
              value={paciente.name}
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="especialidad">Especialidad: </label>
            <select
              id="especialidad"
              name="especialidad"
              value={paciente.especialidad}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Selecciona una especialidad</option>
              {doctores.map((doctor) => (
                <option key={doctor.id} value={doctor.especialidad}>
                  {doctor.especialidad}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="email">Ingresa tu email:</label>
            <input
              onChange={handleChange}
              // onChange={(e) => setPaciente({ ...paciente, name: e.target.value })}
              value={paciente.email}
              type="email"
              name="email"
              placeholder="Ingresa tu nombre"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fecha">Fecha de la Cita:</label>
            <input
              onChange={handleChange}
              value={paciente.fecha}
              name="fecha"
              type="date"
              id="fecha"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Agendar Cita
          </button>
        </form>
      </div>
    </>
  );
};



export default AppointmentForm;
