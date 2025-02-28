import { useContext, useEffect, useState } from "react";
import { DoctoresContext } from "../context/DoctoresContext";
import useIndexedDB from "../hooks/useIndexedDB";

const CitasForm = () => {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [citas, setCitas] = useState([]);
  const { addCita, getCitas } = useIndexedDB();
  const { doctores } = useContext(DoctoresContext);

  useEffect(() => {
    const fetchCitas = async () => {
      const storedCitas = await getCitas();
      console.log("Citas recuperadas desde IndexedDB:", storedCitas);

      const citasLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
      if (storedCitas.length === 0 && citasLocalStorage.length > 0) {
        setCitas(citasLocalStorage);
      } else {
        setCitas(storedCitas);
      }
    };
    fetchCitas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombrePaciente.trim() !== "" &&
      fecha.trim() !== "" &&
      email.trim() !== "" &&
      especialidad.trim() !== ""
    ) {
      const nuevaCita = {
        nombrePaciente,
        fecha: new Date(fecha),
        email,
        especialidad,
        fechaCreacion: new Date(),
      };

      await addCita(nuevaCita);
      console.log("Cita agregada a IndexedDB:", nuevaCita);

      const citasLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
      citasLocalStorage.push(nuevaCita);
      localStorage.setItem("citas", JSON.stringify(citasLocalStorage));

      setNombrePaciente("");
      setFecha("");
      setEmail("");
      setEspecialidad("");

      const storedCitas = await getCitas();
      console.log("Citas después de agregar desde IndexedDB:", storedCitas);
      setCitas(storedCitas);
    }
  };

  return (
    <div className="flex lg:flex-row min-h-screen w-full gap-10 flex-col lg:mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="mb-6 text-2xl font-bold text-indigo-600 uppercase">
          Formulario de citas
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="mb-4">
            <label
              htmlFor="nombrePaciente"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Paciente:
            </label>
            <input
              onChange={(e) => setNombrePaciente(e.target.value)}
              value={nombrePaciente}
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="fecha"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de la cita:
            </label>
            <input
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
              type="date"
              name="fecha"
              placeholder="Ingresa la fecha de la cita"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="especialidad"
              className="block text-sm font-medium text-gray-700"
            >
              Especialidad:
            </label>
            <select
              id="especialidad"
              name="especialidad"
              onChange={(e) => setEspecialidad(e.target.value)}
              value={especialidad}
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

      <div className="flex flex-col w-full max-w-[700px] p-8">
        <h3 className="lg:mb-6 text-2xl font-bold text-indigo-600 uppercase">Citas almacenadas:</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mt-5">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Paciente
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Cita
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Especialidad
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Creación
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {citas.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    No hay citas almacenadas.
                  </td>
                </tr>
              ) : (
                citas.map((cita, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cita.nombrePaciente}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cita.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(cita.fecha).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cita.especialidad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(cita.fechaCreacion).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CitasForm;