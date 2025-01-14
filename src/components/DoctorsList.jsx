import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorsList = () => {
  const { obtenerDoctoresDB, getDoctores } = useContext(DoctoresContext);

  useEffect(() => {
    getDoctores();
  }, [getDoctores]);

  return (
    <>
      <div className="hidden w-full lg:flex lg:flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold">Lista de Doctores</h2>
            <div className="min-w-full divide-y divide-gray-200 h-[300px] overflow-y-scroll">
              <table className="w-full bg-white border ">
                <thead className="bg-gray-50">
                  <tr className="">
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Nombre
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Especialidad
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {obtenerDoctoresDB.map((doctor, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="w-full py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
                        {doctor.nombre}
                      </td>
                      <td className="py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
                        {doctor.especialidad}
                      </td>
                      <td className="py-4 pr-3 text-sm font-medium max-w-0 whitespace-nowrap text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
                        {doctor.email}
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
            <div className="flex-1 min-w-0">
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
