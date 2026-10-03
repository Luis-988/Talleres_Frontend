function Stepper({ value, onIncrease, onDecrease, label }) {
  return (
    <div className="stepper" aria-label={label}>
      <button type="button" aria-label="Disminuir" onClick={onDecrease}>
        −
      </button>
      <strong>{value}</strong>
      <button type="button" aria-label="Aumentar" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}

export default Stepper;
