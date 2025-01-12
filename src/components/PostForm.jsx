import React, { useState } from "react";
import PropTypes from "prop-types";

const PostForm = ({ findAll }) => {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    const listaDoctores = async () => {
      try {
        const response = await findAll(nombre, especialidad, email);
        console.log("Post creado:", response);
      } catch (error) {
        console.error(error);
      }
    };
    e.preventDefault();
    listaDoctores();
  };

  return (
    <div>
      <h1>Tabla No Dinámica</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nombre}</td>
            <td>{especialidad}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSubmit}>Mostrar Listado de Doctores</button>
    </div>
  );
};

PostForm.propTypes = {
  create: PropTypes.func.isRequired,
};

export default PostForm;
