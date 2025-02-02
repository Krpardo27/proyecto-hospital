import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DoctoresContext } from "../context/DoctoresContext";
import axios from "axios";
// import './ContactForm.css';

const ContactForm = () => {
  const [paciente, setPaciente] = useState([]);
  const [body, setBody] = useState("");

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
    axios
      .get("http://localhost:5173/agendar-cita")
      .then((response) => setPaciente(response.data))
      .catch((error) => console.error("Error fetching citas:", error));
  }, []);

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
    <div className="flex items-center justify-center min-h-screen w-full ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="mb-6 text-2xl font-bold text-indigo-600">
          Formulario de citas
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Paciente:
            </label>
            <input
              onChange={(e) => setPaciente(e.target.value)}
              value={paciente.name}
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              ref={inputRef}
            />
            <button
              onClick={handleFocus}
              className="mt-2 text-indigo-600 hover:text-indigo-900"
            >
              Enfocar
            </button>
          </div>

          <div className="mb-4">
            <label
              htmlFor="especialidad"
              className="block text-sm font-medium text-gray-700"
            >
              Especialidad:{" "}
            </label>
            <select
              id="especialidad"
              name="especialidad"
              onChange={(e) => setPaciente(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

          {/* Añadir más campos según sea necesario */}

          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Agendar Cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
