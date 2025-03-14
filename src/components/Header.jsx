import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-lg">
      <div className="container flex items-center justify-between w-full px-4 py-4 mx-auto max-w-[1152px]">
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">Hospital</Link>
        </div>
        <nav className="lg:flex space-x-4 hidden">
          <Link
            to="/"
            className="text-gray-800 transition duration-300 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/equipo-medico"
            className="text-gray-800 transition duration-300 hover:text-indigo-600"
          >
            Equipo Médico
          </Link>
          <Link
            to="/contacto"
            className="text-gray-800 transition duration-300 hover:text-indigo-600"
          >
            Contacto
          </Link>
        </nav>

        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-800">{user.username}</span>
            <button
              onClick={logout}
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <Link
            to="/iniciar-sesion"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
