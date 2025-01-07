import { useContext, useState } from "react";
import { DoctoresContext } from "./context/DoctoresContext";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Home from "./views/Home";
import EquipoMedico from "./views/EquipoMedico";
import Citas from "./views/Citas";

const App = () => {
  const [view, setView] = useState("home");
  const { isModalOpen, toggleModal, selectedDoctor } =
    useContext(DoctoresContext);

  return (
    <div className="container mx-auto mt-4">
      {/* <Header /> */}
      <nav className="d-flex gap-2">
        <button onClick={() => setView("home")}>Inicio</button>
        <button onClick={() => setView("equipo-medico")}>Equipo Médico</button>
        <button onClick={() => setView("agendar-cita")}>Agendar Citas</button>
      </nav>
      {view === "home" && <Home />}
      {view === "equipo-medico" && <EquipoMedico />}
      {view === "agendar-cita" && <Citas />}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        content={selectedDoctor}
      />
    </div>
  );
};

export default App;
