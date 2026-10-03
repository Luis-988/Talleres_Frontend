function SectionHeading({ id, title, subtitle }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
