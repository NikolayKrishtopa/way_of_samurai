import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { LANGUAGES } from '../../utils/action-creators'
import { connect } from 'react-redux'

function Navbar(props) {
  const { lang } = props
  return (
    <div className={s.navbar}>
      <NavLink to="/profile" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'Profile' : 'Профиль'}
      </NavLink>
      <NavLink to="/messages" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'Messages' : 'Сообщения'}
      </NavLink>
      <NavLink to="/users" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'Users' : 'Пользователи'}
      </NavLink>
      <NavLink to="/settings" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'Settings' : 'Настройки'}
      </NavLink>
      <NavLink to="/news" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'News' : 'Новости'}
      </NavLink>
      <NavLink to="/music" className={`${s.navbarItem} navbarItem`}>
        {lang === LANGUAGES.EN ? 'Music' : 'Музыка'}
      </NavLink>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    lang: state.settings.lang,
  }
}

export default connect(mapStateToProps, {})(Navbar)
