import './FormField.css';

function FormField({ id, label, type = 'text', placeholder, register, validation, error }) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(id, validation)}
      />
      {error ? (
        <p className="form-field__error" id={`${id}-error`} role="alert">
          {error.message}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
