import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { DoctoresProvider } from "./context/DoctoresContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DoctoresProvider>
        <App />
    </DoctoresProvider>
  </StrictMode>
);
