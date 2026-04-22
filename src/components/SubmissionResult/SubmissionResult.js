import './SubmissionResult.css';

function maskPassword(password) {
  return '*'.repeat(password.length);
}

function SubmissionResult({ submittedData }) {
  if (!submittedData) {
    return null;
  }

  return (
    <section className="submission-result" aria-live="polite">
      <h2 className="submission-result__title">Отправленные данные</h2>
      <dl className="submission-result__list">
        <div className="submission-result__item">
          <dt className="submission-result__term">Имя</dt>
          <dd className="submission-result__value">{submittedData.name}</dd>
        </div>
        <div className="submission-result__item">
          <dt className="submission-result__term">Email</dt>
          <dd className="submission-result__value">{submittedData.email}</dd>
        </div>
        <div className="submission-result__item">
          <dt className="submission-result__term">Пароль</dt>
          <dd className="submission-result__value">{maskPassword(submittedData.password)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default SubmissionResult;
