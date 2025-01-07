import Header from "../components/Header";
import ServiceListWithData from "../components/ServiceList";
import "../styles/Home.css";
import Servicios from "../components/Servicios";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="row">
        <div className="info-hospital">
          <div className="col-md-6">
            
            <p>
              En el Hospital del Corazón, nos preocupamos por tu salud y
              bienestar. Nuestro equipo de médicos especialistas está altamente
              capacitado para brindarte la mejor atención y cuidado.
            </p>
            <p>
              Contamos con tecnología de punta y un equipo multidisciplinario
              para atender tus necesidades de salud cardiovascular. ¡Agenda tu
              cita hoy mismo!
            </p>
          </div>
          <div className="col-md-6">
            <aside>
              <h2>Servicios Destacados:</h2>
              <Servicios />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
