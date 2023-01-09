import { FiHeart } from "react-icons/fi";
import { FiGift} from "react-icons/fi";
import { FiAirplay } from "react-icons/fi";
import { FiTag } from "react-icons/fi";

function Header() {
    return (
    <div className="header">

      <div className="servicio-container">
        <div className="circle"><FiHeart className="iconHeart" size="1.5em"/></div>
          <div>
          <h5>Amor y delicadeza</h5>
          </div>
          <div><p>Seguinos en nuestras redes sociales y sé el primero en enterarte de promociones y descuentos exclusivos que tenemos para vos.</p></div>
      </div>

      <div className="servicio-container">
        <div className="circle"><FiGift className="iconHeart" size="1.5em"/></div>
          <div>
          <h5>Sorteos y giftcards</h5>
          </div>
          <div><p>Seguinos en nuestras redes sociales y sé el primero en enterarte de promociones y descuentos exclusivos que tenemos para vos.</p></div>
      </div>

      <div className="servicio-container">
        <div className="circle"><FiAirplay className="iconHeart" size="1.5em"/></div>
          <div>
          <h5>Equipamiento moderno</h5>
          </div>
          <div><p>Seguinos en nuestras redes sociales y sé el primero en enterarte de promociones y descuentos exclusivos que tenemos para vos.</p></div>
      </div>

      <div className="servicio-container">
        <div className="circle"><FiTag className="iconHeart" size="1.5em"/></div>
          <div>
          <h5>Promociones y descuentos</h5>
          </div>
          <div><p>Seguinos en nuestras redes sociales y sé el primero en enterarte de promociones y descuentos exclusivos que tenemos para vos.</p></div>
      </div>

    </div>
    );
  }
  
  export default Header;