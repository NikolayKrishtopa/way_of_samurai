import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <NavLink to="/profile" className={s.navbar__item}>
        Профиль
      </NavLink>
      <NavLink to="/messages" className={s.navbar__item}>
        Сообщения
      </NavLink>
      <NavLink to="/news" className={s.navbar__item}>
        Новости
      </NavLink>
      <NavLink to="/music" className={s.navbar__item}>
        Музыка
      </NavLink>
      <NavLink to="/settings" className={s.navbar__item}>
        Настройки
      </NavLink>
    </div>
  )
}
