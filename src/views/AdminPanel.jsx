import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getSecureData } from "../services/api";
import PanelDoctor from "./PanelDoctor";

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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ul>
            {Array.isArray(secureData) &&
              secureData.map((item) => <li key={item.id}>{item.info}</li>)}
          </ul>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
