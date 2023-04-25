import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LanguageType } from '../../models/models';
import { StoreType } from '../../redux/store-redux';
const s = require('./Navbar.module.css');

export type NavBarPropsType = {
  lang: LanguageType;
};

function Navbar(props: NavBarPropsType) {
  const { lang } = props;
  return (
    <div className={s.navbar}>
      <NavLink to='/profile' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'Profile' : 'Профиль'}
      </NavLink>
      <NavLink to='/messages' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'Messages' : 'Сообщения'}
      </NavLink>
      <NavLink to='/users' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'Users' : 'Пользователи'}
      </NavLink>
      <NavLink to='/settings' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'Settings' : 'Настройки'}
      </NavLink>
      <NavLink to='/news' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'News' : 'Новости'}
      </NavLink>
      <NavLink to='/music' className={`${s.navbarItem} navbarItem`}>
        {lang === 'EN' ? 'Music' : 'Музыка'}
      </NavLink>
    </div>
  );
}

function mapStateToProps(state: StoreType) {
  return {
    lang: state.settings.lang,
  };
}

export default connect(mapStateToProps, {})(Navbar);
