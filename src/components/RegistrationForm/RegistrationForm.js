import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FormField from '../FormField/FormField';
import SubmissionResult from '../SubmissionResult/SubmissionResult';
import './RegistrationForm.css';

function RegistrationForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const passwordValue = watch('password');

  const onSubmit = (data) => {
    setSubmittedData(data);
    toast.success('Данные успешно отправлены.');
    reset();
  };

  return (
    <section className="register-form" aria-labelledby="register-form-title">
      <h1 className="register-form__title" id="register-form-title">
        Данные профиля
      </h1>
      <p className="register-form__subtitle">Заполните форму и продолжите.</p>

      <form className="register-form__body" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          id="name"
          label="Имя"
          placeholder="Введите ваше имя"
          register={register}
          validation={{
            required: 'Пожалуйста, введите имя.',
            minLength: {
              value: 2,
              message: 'Имя должно содержать минимум 2 символа.',
            },
          }}
          error={errors.name}
        />

        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="example@mail.com"
          register={register}
          validation={{
            required: 'Пожалуйста, введите email.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Введите корректный email адрес.',
            },
          }}
          error={errors.email}
        />

        <FormField
          id="password"
          type="password"
          label="Пароль"
          placeholder="Не менее 6 символов"
          register={register}
          validation={{
            required: 'Пожалуйста, введите пароль.',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов.',
            },
          }}
          error={errors.password}
        />

        <FormField
          id="confirmPassword"
          type="password"
          label="Подтверждение пароля"
          placeholder="Повторите пароль"
          register={register}
          validation={{
            required: 'Пожалуйста, подтвердите пароль.',
            validate: (value) =>
              value === passwordValue || 'Пароли не совпадают. Проверьте ввод.',
          }}
          error={errors.confirmPassword}
        />

        <button className="register-form__submit" type="submit">
          Продолжить
        </button>
      </form>

      <SubmissionResult submittedData={submittedData} />
    </section>
  );
}

export default RegistrationForm;
