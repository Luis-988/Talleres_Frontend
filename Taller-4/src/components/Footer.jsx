import './Footer.css';

function Footer({ text = 'Taller 04 — React Router.' }) {
  return (
    <footer className="footer">
      <small>
        © 2026 <span>ReactAcademy.</span> {text}
      </small>
    </footer>
  );
}

export default Footer;
