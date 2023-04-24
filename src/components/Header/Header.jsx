import s from './Header.module.css';
import logo from '../../pictures/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const { auth, onLogOut, lang } = props;
  return (
    <div className={s.header}>
      <div className={s.header__logoBlock}>
        <img src={logo} alt='логотип' className={s.logo} />
        <img
          src={logo}
          alt='логотип'
          className={`${s.logo} ${s.logo_style_reversed}`}
        />
        <p className={s.header__text}>
          {lang === 'EN' ? 'Way of the Samurai' : 'Путь самурая'}
          <span className={s.header__text_type_author}>
            {lang === 'EN'
              ? 'Social network for developers'
              : 'Социальная сеть для разработчиков'}
          </span>
        </p>
      </div>
      <div className={s.authBlock}>
        {!auth.isLogged ? (
          <NavLink to='/login' className={s.header__link}>
            {lang === 'EN' ? 'Sign-in' : 'Войти'}
          </NavLink>
        ) : (
          <div className={s.header__loginBlock}>
            <p className={s.header__link}>{auth.user.login}</p>
            <p className={s.header__link} onClick={onLogOut}>
              {lang === 'EN' ? 'Sign-out' : 'Выйти'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
