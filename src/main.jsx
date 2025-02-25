import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DoctoresProvider } from "./context/DoctoresContext.jsx";
import "./index.css";
import Home from "./views/Home.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) => console.log("Error registering service worker: ", error));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DoctoresProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </AuthProvider>
    </DoctoresProvider>
  </StrictMode>
);
