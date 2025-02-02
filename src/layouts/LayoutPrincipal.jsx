import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LayoutPrincipal = () => {
  return (
    <>
      <Header />
      <main className="container w-full mx-auto max-w-[1200px] h-screen p-4">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPrincipal;
