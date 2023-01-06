import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Carrusel  from "../components/Carrusel";

function Home() {
    return (
    <div className="home">
    <Navbar/>
    <Header/>
    <Carrusel/>
    </div>
    );
  }
  
  export default Home;