import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__logo" href="#inicio">
        ReactAcademy
      </a>

      <nav aria-label="Navegación principal">
        <ul className="navbar__links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
