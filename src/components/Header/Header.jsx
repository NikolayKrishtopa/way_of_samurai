import s from './Header.module.css'
import logo from '../../pictures/logo.png'

export default function Header() {
  return (
    <div className={s.header}>
      <img src={logo} alt="логотип" className={s.logo} />
    </div>
  )
}
