import spinner from '../../pictures/spinner.gif'
import s from './PopupLoading.module.css'

export default function PopupLoading() {
  return (
    <div className={s.popup}>
      <img src={spinner} alt="Идет загрузка" className={s.popup__spinner} />
    </div>
  )
}
