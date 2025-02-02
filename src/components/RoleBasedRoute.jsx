import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const RoleBasedRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem("userRole");
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};
RoleBasedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoleBasedRoute;
