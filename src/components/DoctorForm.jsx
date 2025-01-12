import React, { useContext, useState } from "react";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorForm = () => {
  const { doctores, addDoctor } = useContext(DoctoresContext);
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcular el nuevo ID basado en el ID más alto existente
    const maxId = doctores.length > 0 ? Math.max(...doctores.map(doctor => doctor.id)) : 14;
    const newId = maxId + 1;

    const newDoctor = { id: newId, nombre, especialidad, email };

    // Agregar el nuevo doctor
    addDoctor(newDoctor);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg h-full"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Especialidad:
        </label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Doctor
        </button>
      </div>
    </form>
  );
};

export default DoctorForm;