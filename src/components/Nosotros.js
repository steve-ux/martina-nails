import Uñas from "../assets/nail-cool.png";

function Nosotros() {
    return (
    <div className="nosotros">

      <div className="texto-nosotros">
        <h6>Martina Puebla</h6>
        <h2>La historia</h2>
        <p>Acá tenés que contar sobre vos, cómo empezó tu pasión por esto, los inicios de tu negocio y cómo fue creciendo a lo largo del tiempo, podés mencionar las personas que te ayudaron y considerás importantes. Podés explayarte todo lo que quieras, también sería interesante contar lo que querés a futuro con este proyecto.</p>
      </div>
      <div className="img-nosotros">
        <img src={Uñas} alt="Uñas ilustrativas de color rosa"/>
      </div>
  
    </div>
    );
  }
  
  export default Nosotros;