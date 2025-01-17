import express from "express";
import cors from "cors";

const app = express();

// Configurar middlewares
app.use(express.json());
app.use(cors());

// "Base de datos" en memoria
let doctores = [];

// Ruta GET para obtener todos los doctores
app.get("/api/doctores", (req, res) => {
  res.json(doctores);
});

// Ruta POST para agregar un nuevo doctor
// app.post("/api/db.json", (req, res) => {
//   const { id, nombre, especialidad, email } = req.body;
//   if (!id || !nombre || !especialidad || !email) {
//     return res
//       .status(400)
//       .json({ error: "Todos los campos son obligatorios." });
//   }

//   const newDoctor = { id: doctores.length + 15, nombre, especialidad, email };
//   doctores.push(newDoctor);

//   res.status(201).json(newDoctor);
// });

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
