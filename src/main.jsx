import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DoctoresProvider } from "./context/DoctoresContext.jsx";
import "./index.css";
import Home from "./views/Home.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DoctoresProvider>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </DoctoresProvider>
    </AuthProvider>
  </StrictMode>
);
