import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DoctoresProvider } from "./context/DoctoresContext.jsx";
import { ServiciosProvider } from "./context/ServiciosContext.jsx";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DoctoresProvider>
      <ServiciosProvider>
        <App />
      </ServiciosProvider>
    </DoctoresProvider>
  </StrictMode>
);
