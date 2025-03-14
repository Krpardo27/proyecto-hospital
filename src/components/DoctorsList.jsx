import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DoctoresContext } from "../context/DoctoresContext";
import Modal from "./Modal";

const DoctorsList = () => {
  const { obtenerDoctoresDB, getDoctores, deleteDoctor, setDoctorToEdit } =
    useContext(DoctoresContext);

  useEffect(() => {
    getDoctores();
  }, []);

  return (
    <>
      <div className="hidden w-full lg:flex lg:flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="min-w-full divide-y divide-gray-200 h-full overflow-y-scroll">
              <table className="w-full border divide-y divide-gray-200">
                <thead className="bg-gray-300 ">
                  <tr className="">
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">
                      Especialidad
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {obtenerDoctoresDB.map((doctor, index) => (
                    <tr key={index} className="hover:bg-gray-50 group">
                      <td className="w-full py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none  group-hover:bg-gray-200">
                        {doctor.nombre}
                      </td>
                      <td className="w-full py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none  group-hover:bg-gray-200">
                        {doctor.especialidad}
                      </td>
                      <td className="w-full py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none  group-hover:bg-gray-200">
                        {doctor.email}
                      </td>
                      <td className="w-full py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none  group-hover:bg-gray-200">
                        <div className="flex gap-5">
                          <button
                            onClick={() => setDoctorToEdit(doctor)}
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => deleteDoctor(doctor.id)}
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Card View */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {obtenerDoctoresDB.map((doctor, index) => (
          <div
            key={index}
            className="relative flex items-center px-2 py-5 space-x-3 bg-white rounded-lg shadow lg:px-6 ring-1 ring-black ring-opacity-5"
          >
            <div className="flex-1 min-w-0 p-5">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col w-full gap-y-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 truncate lg:text-xl">
                      {doctor.nombre}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-gray-900 truncate">
                      {doctor.especialidad}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-800">
                      {doctor.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DoctorsList;

