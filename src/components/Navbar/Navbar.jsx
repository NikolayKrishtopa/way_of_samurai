import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <NavLink to="/profile" className={`${s.navbarItem} navbarItem`}>
        Профиль
      </NavLink>
      <NavLink to="/messages" className={`${s.navbarItem} navbarItem`}>
        Сообщения
      </NavLink>
      <NavLink to="/news" className={`${s.navbarItem} navbarItem`}>
        Новости
      </NavLink>
      <NavLink to="/music" className={`${s.navbarItem} navbarItem`}>
        Музыка
      </NavLink>
      <NavLink to="/settings" className={`${s.navbarItem} navbarItem`}>
        Настройки
      </NavLink>
      <NavLink to="/users" className={`${s.navbarItem} navbarItem`}>
        Пользователи
      </NavLink>
    </div>
  )
}
