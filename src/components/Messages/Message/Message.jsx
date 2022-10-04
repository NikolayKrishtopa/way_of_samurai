import s from './Message.module.css'

export default function Message(props) {
  const { messageText } = props

  return <div className={s.message}>{messageText}</div>
}
