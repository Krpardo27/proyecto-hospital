import React from "react";

const ServiciosList = ({ service }) => {
  const { servicio, imagen } = service;

  return (
    <li className="list-none bg-gray-200 p-4 w-full rounded-lg group cursor-pointer">
      <div className="flex justify-between items-center gap-2 group-hover">
        <div className="">
          <h3 className="lg:text-xl text-md uppercase relative text-xl font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:h-[2px] group-hover:after:bg-black group-hover:after:w-full group-hover:after:transition-all group-hover:after:duration-300">
            {servicio}
          </h3>
        </div>
        <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
          <img src={`${imagen}.png`} alt={servicio} className="w-[80px]" />
        </div>
      </div>
    </li>
  );
};

export default ServiciosList;
