import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Carrusel  from "../components/Carrusel";
import WhatsApp from "../assets/whatsapp_green.png";
import Nosotros from "../components/Nosotros";
import Gallery from "../components/Gallery";
import Contacto from "../components/Contacto";

function Home() {
    return (
    <div className="home">
    <Navbar/>
    <Carrusel/>
    <Header/>
    <a href="https://api.whatsapp.com/send?phone=5492616376579&text=Hola!%20Visité%20su%20web%20y%20quisiera%20solicitar%20un%20turno.%20Gracias!" target="_blank" rel="noreferrer" className="btn-wsp"><img className="btn-wsp" src={WhatsApp} alt="WhatsApp" /></a>
    <Nosotros/>
    <Gallery/>
    <h4>Sección opinión de clientes</h4>
    <Contacto/>
    <h4>Sección formulario de contacto - google maps</h4>
    <h4>Sección fotos de trabajos</h4>
    <h4>Footer</h4>
    </div>
    );
  }
  
  export default Home;