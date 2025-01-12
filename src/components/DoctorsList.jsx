import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DoctoresContext } from "../context/DoctoresContext";

const DoctorsList = () => {
  const { doctores } = useContext(DoctoresContext);

  return (
    <>
      <div className="hidden lg:flex lg:flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Lista de Doctores</h2>
            <div className="min-w-full divide-y divide-gray-200 h-[300px] overflow-y-scroll">
              <table className="w-full bg-white border ">
                <thead className="bg-gray-50">
                  <tr className="">
                    <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Nombre
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Especialidad
                    </th>
                    <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widerpx-3 bg-gray-50">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {doctores.map((doctor, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="w-full max-w-0 whitespace-nowrap py-4 pr-3 text-sm font-medium text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
                        {doctor.nombre}
                      </td>
                      <td className=" max-w-0 whitespace-nowrap py-4 pr-3 text-sm font-medium text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
                        {doctor.especialidad}
                      </td>
                      <td className=" max-w-0 whitespace-nowrap py-4 pr-3 text-sm font-medium text-wgra-300 sm:w-auto sm:pl-6 sm:max-w-none">
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
        {doctores.map((doctor, index) => (
          <div
            key={index}
            className="relative flex items-center space-x-3 rounded-lg bg-white lg:px-6 px-2 py-5 shadow ring-1 ring-black ring-opacity-5"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col w-full gap-y-3">
                  <div className="flex-1">
                    <h3 className="lg:text-xl truncate text-lg font-medium text-gray-900">
                      {doctor.nombre}
                    </h3>
                    <p className="mb-2 truncate text-sm font-medium text-gray-900">
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
