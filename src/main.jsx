import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DoctoresProvider } from "./context/DoctoresContext.jsx";
import App from "./App.jsx";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DoctoresProvider>
      <App />
    </DoctoresProvider>
  </StrictMode>
);
