import Logo from "../assets/mp.png";

function Navbar() {
    return (
      <div className="burgerNav">
  <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id=""/>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><a href="#home">INICIO</a></li>
              <li><a href="#servicios">SERVICIOS</a></li>
              <li><a href="#contact">CONTACTO</a></li>
          </ul>
      <img src={Logo} alt="Logo Martina Puebla" width="200"/>       
      </div>
  </nav>
    </div>
    );
  }
  
  export default Navbar;