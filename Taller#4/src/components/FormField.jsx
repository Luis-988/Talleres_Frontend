function FormField({ id, label, type = 'text', value, onChange, disabled, placeholder, autoComplete }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default FormField;
