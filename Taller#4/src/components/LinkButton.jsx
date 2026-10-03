import { Link } from 'react-router-dom';

function LinkButton({ to, children, icon }) {
  return (
    <Link className="button" to={to}>
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </Link>
  );
}

export default LinkButton;
