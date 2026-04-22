import './FormField.css';

function FormField({
  name,
  label,
  type = 'text',
  register,
  rules,
  error,
}) {
  return (
    <label className="form-field" htmlFor={name}>
      <span className="form-field__label">{label}</span>
      <input
        id={name}
        type={type}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
        {...register(name, rules)}
      />
      {error && <p className="form-field__error">{error.message}</p>}
    </label>
  );
}

export default FormField;
