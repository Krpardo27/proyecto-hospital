import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const HeaderAuth = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/iniciar-sesion");
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-lg">
      <div className="container flex items-center justify-between w-full px-4 py-4 mx-auto max-w-[1152px]">
        <div className="text-2xl font-bold text-indigo-600">
          <h1>Hospital</h1>
        </div>

        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-800">{user.username}</span>
            <button
              onClick={handleLogout}
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

export default HeaderAuth;
