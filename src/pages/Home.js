import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Carrusel  from "../components/Carrusel";
import WhatsApp from "../assets/whatsapp_green.png";
import Nosotros from "../components/Nosotros";
import Gallery from "../components/Gallery";

function Home() {
    return (
    <div className="home">
    <Navbar/>
    <Carrusel/>
    <Header/>
    <a href="https://api.whatsapp.com/send?phone=5492616376579&text=Hola!%20Visité%20su%20web%20y%20quisiera%20solicitar%20un%20turno.%20Gracias!" target="_blank" rel="noreferrer" className="btn-wsp"><img className="btn-wsp" src={WhatsApp} alt="WhatsApp" /></a>
    <Nosotros/>
    <Gallery/>
    </div>
    );
  }
  
  export default Home;