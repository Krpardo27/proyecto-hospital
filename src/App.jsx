import { useContext, useState } from "react";
// import { DoctoresContext } from "./context/DoctoresContext";
// import Modal from "./components/Modal";
import EquipoMedico from "./views/EquipoMedico"; 
import Citas from "./views/Citas"; 
import Home from "./views/Home";

const App = () => {
  const [view, setView] = useState("home");
  // const { isModalOpen, toggleModal, selectedDoctor } =
  //   useContext(DoctoresContext);

  return (
    <div className="container mx-auto max-w-7xl">
      {/* <Header /> */}
      <nav className="flex gap-5 p-5">
        <button onClick={() => setView("home")} className="px-5 py-2 bg-blue-400 text-white uppercase">Inicio</button>
        <button onClick={() => setView("equipo-medico")} className="px-5 py-2 bg-blue-400 text-white uppercase">Equipo Médico</button>
        <button onClick={() => setView("agendar-cita")} className="px-5 py-2 bg-blue-400 text-white uppercase">Agendar Citas</button>
      </nav>
      {view === "home" && <Home />}
      {view === "equipo-medico" && <EquipoMedico />}
      {view === "agendar-cita" && <Citas />}
      {/* <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        content={selectedDoctor}
      /> */}
    </div>
  );
};

export default App;
