import { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getSecureData } from "../services/api";
import DoctorsList from "../components/DoctorsList";
import DoctorForm from "../components/DoctorForm";

const AdminPanel = () => {
  const { user } = useAuth();
  const [secureData, setSecureData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("user");
      if (!token) {
        setError("No se encontró un token válido. Inicia sesión de nuevo.");
        return;
      }
      try {
        console.log("voy a llamar al getSecureData", token);

        const data = await getSecureData(token);
        setSecureData(data);
      } catch (error) {
        setError("Token inválido o no autorizado");
        console.error(error);
      }
    };
    if (user?.role === "admin") {
      fetchData();
    }
  }, [user]);

  return (
    <div className="">
      <h1>AdminPanel</h1>
      {user?.role === "admin" && (
        <>
          <p>Bienvenido, Administrador. Aquí están los datos protegidos:</p>
          <h2 className="mb-4 text-2xl font-bold mt-5">Lista de Doctores</h2>
          <div className="flex lg:flex-row flex-col w-full gap-5 justify-between">
            <div className="lg:w-1/3">
              <DoctorForm />
            </div>
            <div className="lg:w-2/3">
              <DoctorsList />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPanel;