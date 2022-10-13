import { NavLink } from 'react-router-dom'
import actionCreators from '../../../utils/action-creators'
import s from './Dialog.module.css'

export default function Dialog(props) {
  const { name, id, dispatch } = props

  function changeUserId() {
    dispatch(actionCreators.chooseUser(id))
  }

  return (
    <NavLink to={`/messages/${id}`} className={s.dialog} onClick={changeUserId}>
      {name}
    </NavLink>
  )
}
