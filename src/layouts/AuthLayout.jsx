import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderAuth from "../components/HeaderAuth";

const AuthLayout = () => {
  return (
    <>
      <HeaderAuth />
      <main className="container mx-auto w-full max-w-[1152px] px-4 py-5">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
