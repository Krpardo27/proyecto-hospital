import React from "react";
import { useForm, validateForm } from "../hooks/useForm";

const RegisterDoctor = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      id: "",
      nombre: "",
      especialidad: "",
      email: "",
    },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={values.id}
          onChange={handleChange}
        />
        {errors.id && <p>{errors.id}</p>}
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>
      <div>
        <label>Especialidad:</label>
        <input
          type="text"
          name="especialidad"
          value={values.especialidad}
          onChange={handleChange}
        />
        {errors.especialidad && <p>{errors.especialidad}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Registrar Doctor</button>
    </form>
  );
};

export default RegisterDoctor;