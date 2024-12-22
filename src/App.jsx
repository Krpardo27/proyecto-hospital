
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import { useContext } from "react";
import { DoctoresContext } from "./context/DoctoresContext";
import Modal from "./components/Modal";

const App = () => {
  // const doctores = [
  //   {
  //     id: 1,
  //     nombre: "Dr. Ana Pérez",
  //     especialidad: "Cardiología",
  //     experiencia: 12,
  //     disponibilidad: "Lunes a Viernes, 9:00 AM - 3:00 PM",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Dr. Luis González",
  //     especialidad: "Emergencias Cardiovasculares",
  //     experiencia: 8,
  //     disponibilidad: "Martes y Jueves, 10:00 AM - 2:00 PM",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Dra. María Rodríguez",
  //     especialidad: "Cirugía Cardíaca",
  //     experiencia: 15,
  //     disponibilidad: "Lunes, Miércoles y Viernes, 8:00 AM - 1:00 PM",
  //   },
  //   {
  //     id: 4,
  //     nombre: "Dr. Jorge Martínez",
  //     especialidad: "Pruebas Diagnósticas Cardíacas",
  //     experiencia: 20,
  //     disponibilidad: "Lunes a Viernes, 10:00 AM - 4:00 PM",
  //   },
  //   {
  //     id: 5,
  //     nombre: "Dra. Carmen López",
  //     especialidad: "Rehabilitación Cardiaca",
  //     experiencia: 10,
  //     disponibilidad: "Miércoles y Viernes, 9:00 AM - 12:00 PM",
  //   },
  // ];
  const { doctores, isModalOpen, toggleModal, selectedDoctor } =
    useContext(DoctoresContext);

  return (
    <div className="container mx-auto">
      <h1>¡Bienvenidos al Hospital del Corazón!</h1>
      <DoctorCard doctores={doctores} />
      <ServiceList doctores={doctores} />
      <AppointmentForm doctores={doctores} />
      <Modal isOpen={isModalOpen} onClose={toggleModal} content={selectedDoctor} />
    </div>
  );
};

export default App;
