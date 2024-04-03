import logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav__section1">
        <div className="nav__phone-container">
          <i className="bx bxs-phone"></i>
        </div>
        <a
            href="https://wa.me/+573202808051?text=Hola,%20ví%20la%20pagina%20de escalante%20café%20y%20quiero%20contactar%20con%20ustedes"
            target="_blank"
            rel="noreferrer"
            className="nav__phone-link">
            +57 3202808051
        </a>
        <p>
        Para venta de Café tostado y exportaciones
        </p>
      </div>
      <div className="nav__section2">
        <div className="nav__logo-container">
          <img src={logo} alt="logoEscalante" />
        </div>
        <div className="nav__options-container">
            <ul>
                <btn>Inicio</btn>
                <btn>Productos</btn>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
