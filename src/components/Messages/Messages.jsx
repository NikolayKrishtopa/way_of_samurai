import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import s from './Messages.module.css'

const dialogs = [
  { id: 1, name: 'Алёна' },
  { id: 2, name: 'Миша' },
  { id: 3, name: 'Эля' },
  { id: 4, name: 'Вика' },
  { id: 5, name: 'Макс' },
  { id: 6, name: 'Женя' },
  { id: 7, name: 'Сережа' },
  { id: 8, name: 'Мама' },
]

const messageList = ['Привет!', 'Как поживаешь?', 'Когда домой?', 'Я скучаю']

export default function Messages() {
  return (
    <div className={s.messagesSection}>
      <div className={s.dialogs}>
        {dialogs.map((e) => (
          <Dialog name={e.name} id={e.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messageList.map((e) => (
          <Message messageText={e} />
        ))}
      </div>
    </div>
  )
}
