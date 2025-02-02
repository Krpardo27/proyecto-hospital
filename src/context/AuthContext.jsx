import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { decryptData, encryptData } from "../utils/utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser);
      setUser(decryptedUser);
    }
    setLoading(false);
  }, []);

  const login = (role) => {
    const userData = { role };
    setUser(userData);
    const encryptUser = encryptData(userData);
    localStorage.setItem("user", encryptUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <p>Cargando...</p>}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContext);
