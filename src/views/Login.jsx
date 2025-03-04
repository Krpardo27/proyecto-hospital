import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { TbFaceId } from "react-icons/tb";

import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  } = useLogin();

  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      // Acceder a la cámara
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => console.log("Error al acceder a la cámara:", error));
    }
    return () => {
 
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [showVideo]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Ingresa tu usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="mb-6 flex flex-col gap-5">
            <button className="w-[100px]" type="button" onClick={() => setShowVideo(!showVideo)}>
              <h3 className="flex items-center justify-between">Face ID <TbFaceId className=" text-blue-800 text-[40px]"/></h3>
            </button>
            {showVideo && <video ref={videoRef} autoPlay width="300px"></video>}
          </div>

          {error && (
            <div className="mb-4 text-red-600">
              Credenciales incorrectas. Por favor, inténtalo de nuevo.
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
