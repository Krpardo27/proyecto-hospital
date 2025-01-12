import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DoctoresContext } from "../context/DoctoresContext";
import axios from "axios";
// import './ContactForm.css';

const ContactForm = () => {
  const [paciente, setPaciente] = useState([]);
  const [body, setBody] = useState('');

  const { doctores } = useContext(DoctoresContext);

  // const handleChange = (e) => {
  //   setPaciente({ ...paciente, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Formulario enviado: ");
  //   setPaciente({
  //     name: "",
  //     especialidad: "",
  //     email: "",
  //     fecha: "",
  //   });
  // };

  useEffect(() => { 
    axios.get('http://localhost:5173/agendar-cita')
    .then((response) => setPaciente(response.data))
    .catch((error) => console.error("Error fetching citas:", error));
  }, [])

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5173/agendar-cita", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    })
      .then((response) => response.json())
      .then((data) => console.log("Cita Agendada: ", data))
      .catch((error) => console.error("Error al agendar cita:", error));
  };

  return (
    <>
      <div className="container mx-auto">
        <h1>Formulario de citas</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="nombre">Nombre del Paciente:</label>
            <input
              onChange={(e) => setPaciente(e.target.value)}
              value={paciente.name}
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="form-control"
              required
              ref={inputRef}
            />
            <button onClick={handleFocus}>Enfocar</button>
          </div>

          <div className="mb-3">
            <label htmlFor="especialidad">Especialidad: </label>
            <select
              id="especialidad"
              name="especialidad"
              onChange={(e) => setPaciente(e.target.value)}
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
              onChange={(e) => setPaciente(e.target.value)}
              value={paciente.email}
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fecha">Fecha de la Cita:</label>
            <input
              onChange={(e) => setPaciente(e.target.value)}
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

export default ContactForm;
