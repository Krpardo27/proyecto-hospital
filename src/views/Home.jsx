import { useNavigate } from "react-router-dom";
import DoctorsList from "../components/DoctorsList";
import Servicios from "../components/Servicios";


const Home = () => {

  return (
    <>
      <div className="container">
        <div className="flex-1 p-5">
          <h2 className="text-3xl">En nuestro Hospital</h2>
          <p>
            nos preocupamos por tu salud y bienestar. Nuestro equipo de médicos
            especialistas está altamente capacitado para brindarte la mejor
            atención y cuidado. <br />
            Contamos con tecnología de punta y un equipo multidisciplinario para
            atender tus necesidades de salud cardiovascular. ¡Agenda tu cita hoy
            mismo!
          </p>
        </div>
        <div className="flex-1 p-5">
          <aside>
            <h2 className="text-2xl">Servicios Destacados:</h2>
            <Servicios />
          </aside>
        </div>
      </div>

      <div className="flex flex-col w-full gap-5 p-5 lg:flex-row">
        {/* <DoctorForm /> */}
        <DoctorsList />
      </div>
      
    </>
  );
};

export default Home;
