import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade interval="4000" pause="hover false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/home-main-slide-4.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="justify-content-center">
          <h2 className="d-flex justify-content-center">CONFIANZA</h2>
          <p>Trato personalizado y trabajos de excelente calidad para verte más bella.</p>
          <button><a href="https://api.whatsapp.com/send?phone=5492616376579&text=Hola!%20Visité%20su%20web%20y%20quisiera%20solicitar%20un%20turno.%20Gracias!" target="_blank" rel="noreferrer" className="btn-carrusel">PEDIR TURNO</a></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/home-main-slide-5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className="d-flex justify-content-center">MODA</h2>
        <p>Probá los últimos estilos y combinaciones, somos el arte de las uñas.</p>
        <button><a href="https://api.whatsapp.com/send?phone=5492616376579&text=Hola!%20Visité%20su%20web%20y%20quisiera%20solicitar%20un%20turno.%20Gracias!" target="_blank" rel="noreferrer" className="btn-carrusel">PEDIR TURNO</a></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/home-main-slide-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h2 className="d-flex justify-content-center">GLAMOUR</h2>
          <p>Llamá la atención de tu círculo social a un precio más que accesible.</p>
          <button><a href="https://api.whatsapp.com/send?phone=5492616376579&text=Hola!%20Visité%20su%20web%20y%20quisiera%20solicitar%20un%20turno.%20Gracias!" target="_blank" rel="noreferrer" className="btn-carrusel">PEDIR TURNO</a></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;