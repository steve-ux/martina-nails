import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade interval="3000" pause="hover false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/home-main-slide-4.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="justify-content-center">
          <h2 className="d-flex justify-content-center">BEAUTY</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>PEDIR TURNO</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kloe.qodeinteractive.com/wp-content/uploads/2015/12/home-main-slide-5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className="d-flex justify-content-center">FASHION</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>PEDIR TURNO</button>
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
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button>PEDIR TURNO</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;