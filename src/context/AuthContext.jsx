import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { decryptData, encryptData } from "../utils/utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
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

  const login = (role, token, isAdmin) => {
    const userData = { role, token, admin: isAdmin };
    setUser(userData);
    setAdmin(isAdmin);
    const encryptedUser = encryptData(userData);
    localStorage.setItem("user", encryptedUser);
  };

  const logout = () => {
    setUser(null);
    setAdmin(false);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    admin,
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
