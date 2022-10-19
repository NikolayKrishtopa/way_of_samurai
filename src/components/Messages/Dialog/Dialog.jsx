import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

export default function Dialog(props) {
  const { name, id, onSwitchCompanionId } = props

  return (
    <NavLink to={`/messages/${id}`} className={s.dialog} onClick={() => onSwitchCompanionId(id)}>
      {name}
    </NavLink>
  )
}
