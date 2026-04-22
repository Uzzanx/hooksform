import './SubmitResult.css';

function SubmitResult({ data }) {
  if (!data) {
    return null;
  }

  return (
    <section className="submit-result" aria-live="polite">
      <h2 className="submit-result__title">Отправленные данные</h2>
      <p className="submit-result__row">Имя: {data.name}</p>
      <p className="submit-result__row">Email: {data.email}</p>
      <p className="submit-result__row">Пароль: {'*'.repeat(data.password.length)}</p>
    </section>
  );
}

export default SubmitResult;
