/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AppointmentForm = ({ doctores }) => {
  const [paciente, setPaciente] = useState({
    name: "",
    especialidad: "",
    fecha: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", paciente);
  };

  return (
    <>
      <h1>Formulario de citas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Paciente:</label>
          <input
            onChange={(e) => setPaciente({ ...paciente, name: e.target.value })}
            value={paciente.name}
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="especialidad">Especialidad: </label>
          <select
            id="especialidad"
            name="especialidad"
            value={paciente.especialidad}
            onChange={(e) =>
              setPaciente({ ...paciente, especialidad: e.target.value })
            }
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

        <div>
          <label htmlFor="fecha">Fecha de la Cita:</label>
          <input
            onChange={(e) =>
              setPaciente({ ...paciente, fecha: e.target.value })
            }
            value={paciente.fecha}
            type="date"
            id="fecha"
            required
          />
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
    </>
  );
};

export default AppointmentForm;
