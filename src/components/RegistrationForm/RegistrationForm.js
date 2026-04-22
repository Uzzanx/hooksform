import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FormField from '../FormField/FormField';
import SubmitResult from '../SubmitResult/SubmitResult';
import './RegistrationForm.css';

function RegistrationForm() {
  const [data, setData] = useState(null);

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

  const onSubmit = (values) => {
    setData(values);
    toast.success('Данные успешно отправлены.');
    reset();
  };

  return (
    <section className="register-form">
      <h1 className="register-form__title">Форма регистрации</h1>
      <form className="register-form__body" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          name="name"
          label="Имя"
          register={register}
          rules={{
            required: 'Введите имя',
            minLength: { value: 2, message: 'Минимум 2 символа' },
          }}
          error={errors.name}
        />

        <FormField
          name="email"
          label="Email"
          type="email"
          register={register}
          rules={{
            required: 'Введите email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Некорректный email',
            },
          }}
          error={errors.email}
        />

        <FormField
          name="password"
          label="Пароль"
          type="password"
          register={register}
          rules={{
            required: 'Введите пароль',
            minLength: { value: 6, message: 'Минимум 6 символов' },
          }}
          error={errors.password}
        />

        <FormField
          name="confirmPassword"
          label="Подтверждение пароля"
          type="password"
          register={register}
          rules={{
            required: 'Подтвердите пароль',
            validate: (value) => value === passwordValue || 'Пароли не совпадают',
          }}
          error={errors.confirmPassword}
        />

        <button className="register-form__submit" type="submit">
          Отправить
        </button>
      </form>

      <SubmitResult data={data} />
    </section>
  );
}

export default RegistrationForm;
