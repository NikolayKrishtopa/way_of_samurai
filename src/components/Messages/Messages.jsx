import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import s from './Messages.module.css'

export default function Messages(props) {
  const { dialogs } = props
  return (
    <div className={s.messagesSection}>
      <div className={s.dialogs}>
        {dialogs.map((e) => (
          <Dialog name={e.name} id={e.id} key={e.id} />
        ))}
      </div>
      <div className={s.messages}>
        {dialogs[1].messages.map((e, i) => (
          <Message messageText={e} key={i} />
        ))}
      </div>
    </div>
  )
}
