import useFormAndValidation from '../../hooks/useFormAndValidation';
import { LoginDataType } from '../../models/models';
const s = require('./Login.module.css');

type LoginProps = {
  onSubmit: (arg: LoginDataType) => void;
};

export default function Login(props: LoginProps) {
  const { onSubmit } = props;

  type UseFormAndValidationType = {
    values: LoginDataType;
    handleChange: (e: any) => void;
    errors: any;
    isValid: boolean;
    resetForm: () => void;
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation() as UseFormAndValidationType;

  function handleSubmitForm(e: any) {
    e.preventDefault();
    onSubmit(values);
    resetForm();
  }

  return (
    <div className={s.loginPage}>
      <form className={s.loginPage__form} onSubmit={handleSubmitForm}>
        <div className={s.loginPage__block}>
          <input
            required
            minLength={3}
            maxLength={40}
            type='text'
            onChange={handleChange}
            placeholder='логин'
            className={s.loginPage__input}
            name='email'
            value={values.email ? values.email : ''}
          />
          <p className={s.loginPage__error}>{errors.email}</p>
        </div>
        <div className={s.loginPage__block}>
          <input
            required
            minLength={3}
            maxLength={15}
            type='password'
            name='password'
            value={values.password ? values.password : ''}
            onChange={handleChange}
            placeholder='пароль'
            className={s.loginPage__input}
          />
          <p className={s.loginPage__error}>{errors.password}</p>
        </div>
        <label htmlFor='rememberMe' className={s.loginPage__checkBoxLabel}>
          <input
            type='checkbox'
            className={s.loginPage__checkBox}
            name='rememberMe'
            value={values.rememberMe}
            onChange={handleChange}
          />
          Запомнить меня
        </label>
        <button
          type='submit'
          className={`${s.loginPage__button} ${
            isValid && s.loginPage__button_active
          }`}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </div>
  );
}
