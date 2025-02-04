import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      if (username === "admin" && password === "password") {
        login("admin", "token", true); // Pasa true para isAdmin
        navigate("/admin-panel");
      } else if (username === "doctor" && password === "password") {
        login("user", "token", false); // Pasa false para isAdmin
        navigate("/doctor-panel");
      } else {
        setError(true);
        alert("Credenciales incorrectas");
      }
      setLoading(false);
    }, 2000);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  };
};

export default useLogin;