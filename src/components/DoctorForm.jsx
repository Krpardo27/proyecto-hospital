import React, { useContext, useState, useEffect } from "react";
import { DoctoresContext } from "../context/DoctoresContext";
import DOMPurify from "dompurify";

const DoctorForm = () => {
  const { addDoctor, editDoctor, doctorToEdit, setDoctorToEdit } =
    useContext(DoctoresContext);
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (doctorToEdit) {
      setNombre(doctorToEdit.nombre);
      setEspecialidad(doctorToEdit.especialidad);
      setEmail(doctorToEdit.email);
    }
  }, [doctorToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (nombre.trim() === '' || especialidad.trim() === '' || email.trim() === '') {
      setErrors({
        nombre: nombre.trim() === '' ? 'Este campo es obligatorio.' : '',
        especialidad: especialidad.trim() === '' ? 'Este campo es obligatorio.' : '',
        email: email.trim() === '' ? 'Este campo es obligatorio.' : ''
      });
      return;
    }

    // Sanitizar los inputs
    const sanitizedNombre = DOMPurify.sanitize(nombre);
    const sanitizedEspecialidad = DOMPurify.sanitize(especialidad);
    const sanitizedEmail = DOMPurify.sanitize(email);

    // Comprobar los valores sanitizados
    console.log("Sanitizado Nombre:", sanitizedNombre);
    console.log("Sanitizado Especialidad:", sanitizedEspecialidad);
    console.log("Sanitizado Email:", sanitizedEmail);

    const doctorData = {
      nombre: sanitizedNombre,
      especialidad: sanitizedEspecialidad,
      email: sanitizedEmail
    };

    if (doctorToEdit) {
      // Editar doctor existente
      editDoctor({ ...doctorData, id: doctorToEdit.id });
      setDoctorToEdit(null);
      setSuccessMessage("Doctor actualizado correctamente");
    } else {
      // Agregar nuevo doctor
      addDoctor(doctorData);
      setSuccessMessage("Doctor agregado correctamente");
    }

    setNombre("");
    setEspecialidad("");
    setEmail("");
    setErrors({});

    // Limpiar el mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full p-8 bg-white rounded-lg shadow-md shadow-slate-400"
    >
      {successMessage && (
        <div className="mb-4 text-green-500">{successMessage}</div>
      )}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Especialidad:
        </label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.especialidad && <p className="text-red-500">{errors.especialidad}</p>}

      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          {doctorToEdit ? "Actualizar Doctor" : "Agregar Doctor"}
        </button>
      </div>
    </form>
  );
};

export default DoctorForm;

