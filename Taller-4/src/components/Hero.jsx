import LinkButton from './LinkButton.jsx';

function Hero({ before, highlight, after, description, ctaLabel, ctaTo }) {
  return (
    <section className="hero" aria-labelledby="home-title">
      <h1 id="home-title">
        {before} <em>{highlight}</em> {after}
      </h1>
      <p className="hero__description">{description}</p>
      <LinkButton to={ctaTo} icon="→">
        {ctaLabel}
      </LinkButton>
    </section>
  );
}

export default Hero;
