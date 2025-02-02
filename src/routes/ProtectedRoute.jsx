import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Cambia esto según el estado real de autenticación

  if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/iniciar-sesion" />;
  }

  // Si está autenticado, renderiza el contenido protegido
  return children; 
};

export default ProtectedRoute;
