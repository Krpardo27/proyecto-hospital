import React from "react";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";

const App = () => {
  const doctores = [
    {
      id: 1,
      nombre: "Dr. Ana Pérez",
      especialidad: "Cardiología",
      experiencia: 12,
      disponibilidad: "Lunes a Viernes, 9:00 AM - 3:00 PM",
    },
    {
      id: 2,
      nombre: "Dr. Luis González",
      especialidad: "Emergencias Cardiovasculares",
      experiencia: 8,
      disponibilidad: "Martes y Jueves, 10:00 AM - 2:00 PM",
    },
    {
      id: 3,
      nombre: "Dra. María Rodríguez",
      especialidad: "Cirugía Cardíaca",
      experiencia: 15,
      disponibilidad: "Lunes, Miércoles y Viernes, 8:00 AM - 1:00 PM",
    },
    {
      id: 4,
      nombre: "Dr. Jorge Martínez",
      especialidad: "Pruebas Diagnósticas Cardíacas",
      experiencia: 20,
      disponibilidad: "Lunes a Viernes, 10:00 AM - 4:00 PM",
    },
    {
      id: 5,
      nombre: "Dra. Carmen López",
      especialidad: "Rehabilitación Cardiaca",
      experiencia: 10,
      disponibilidad: "Miércoles y Viernes, 9:00 AM - 12:00 PM",
    },
  ];

  const servicios = [
    {
      id: 1,
      nombre: "Consulta Cardiológica",
      disponible: true,
      descripcion:
        "Evaluación clínica especializada para diagnóstico y manejo de enfermedades cardíacas comunes.",
    },
    {
      id: 2,
      nombre: "Emergencias Cardiovasculares",
      disponible: true,
      descripcion:
        "Atención urgente para pacientes con afecciones graves como infartos, arritmias y otros problemas cardíacos.",
    },
    {
      id: 3,
      nombre: "Pruebas Diagnósticas Cardíacas",
      disponible: false,
      descripcion:
        "Realización de pruebas especializadas como electrocardiograma, ecocardiograma y pruebas de esfuerzo.",
    },
    {
      id: 4,
      nombre: "Cirugía Cardíaca",
      disponible: true,
      descripcion:
        "Intervenciones quirúrgicas para tratar afecciones cardíacas graves como bypass, válvulas artificiales, y trasplante de corazón.",
    },
    {
      id: 5,
      nombre: "Rehabilitación Cardiaca",
      disponible: true,
      descripcion:
        "Programa de recuperación para pacientes que han sufrido un evento cardiovascular, con ejercicios supervisados y apoyo psicológico.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1>¡Bienvenidos al Hospital del Corazón!</h1>
      <div>
        {doctores.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>

      <div>
        {servicios.map((servicio, index) => (
          <ServiceList key={index} servicio={servicio} />
        ))}
      </div>
      <AppointmentForm doctores={doctores} />
    </div>
  );
};

export default App;
