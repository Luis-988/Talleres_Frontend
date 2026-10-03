import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/links.js';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <Link className="navbar__logo" to="/">
        ReactAcademy
      </Link>

      <nav aria-label="Navegación principal">
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
