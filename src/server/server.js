import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();

// Configurar el encabezado X-Frame-Options
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// Configurar middlewares
app.use(express.json());
app.use(cors());

// Configurar limitador de solicitudes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita cada IP a 100 solicitudes por ventana de 15 minutos
  message: "Demasiadas solicitudes desde esta IP, por favor intenta de nuevo después de 15 minutos"
});

// Aplicar el limitador a todas las solicitudes
app.use(limiter);

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
