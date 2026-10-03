import LinkButton from '../components/LinkButton.jsx';

function NotFound() {
  return (
    <main className="page">
      <section className="not-found" aria-labelledby="not-found-title">
        <p className="not-found__code">404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <p className="not-found__text">La dirección que buscas no existe o fue movida.</p>
        <LinkButton to="/" icon="←">
          Volver al inicio
        </LinkButton>
      </section>
    </main>
  );
}

export default NotFound;
