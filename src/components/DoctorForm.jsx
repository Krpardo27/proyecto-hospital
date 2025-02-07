import React, { useContext, useState, useEffect } from "react";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorForm = () => {
  const { addDoctor, editDoctor, doctorToEdit, setDoctorToEdit } =
    useContext(DoctoresContext);
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (doctorToEdit) {
      setNombre(doctorToEdit.nombre);
      setEspecialidad(doctorToEdit.especialidad);
      setEmail(doctorToEdit.email);
    }
  }, [doctorToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctorData = { nombre, especialidad, email };

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

    // Limpiar el mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full max-w-lg p-8 bg-white rounded-lg shadow-md"
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
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          {doctorToEdit ? "Actualizar Doctor" : "Agregar Doctor"}
        </button>
      </div>
    </form>
  );
};

export default DoctorForm;
