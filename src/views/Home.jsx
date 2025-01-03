import { useContext } from "react";
import Header from "../components/Header";
import { ServiciosContext } from "../context/ServiciosContext";
import ServiceListWithData from "../components/ServiceList";
import '../styles/Home.css';

const Home = () => {

  const { servicios } = useContext(ServiciosContext);

  return (
    <div className="container mx-auto">
        <Header />
      <div className="info-hospital">
        <div>
          <h1>¡Bienvenidos al Hospital del Corazón!</h1>
          <p>
            En el Hospital del Corazón, nos preocupamos por tu salud y
            bienestar. Nuestro equipo de médicos especialistas está altamente
            capacitado para brindarte la mejor atención y cuidado.
          </p>
          <p>
            Contamos con tecnología de punta y un equipo multidisciplinario para
            atender tus necesidades de salud cardiovascular. ¡Agenda tu cita hoy
            mismo!
          </p>

          <aside>
            <h2>Servicios Destacados:</h2>
            <ul>
              {servicios.map((servicio, id) => (
                <ServiceListWithData key={id} servicio={servicio}/>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
