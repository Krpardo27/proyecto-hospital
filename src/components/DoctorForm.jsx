import React, { useContext, useState } from "react";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorForm = () => {
  const { addDoctor } = useContext(DoctoresContext);
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = { nombre, especialidad, email };

    addDoctor(newDoctor);
    setNombre("");
    setEspecialidad("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full max-w-lg p-8 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
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
          required
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
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Agregar Doctor
        </button>
      </div>
      
    </form>
  );
};

export default DoctorForm;