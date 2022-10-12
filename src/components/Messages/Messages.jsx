import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { actionCreators } from '../../redux/store'
import s from './Messages.module.css'

export default function Messages(props) {
  const { messagesPage, dispatch } = props
  const { dialogs, newMessageText, chosenUserId } = messagesPage

  function handleSendMessage() {
    dispatch(actionCreators.sendMessage())
  }

  function handleMessageTextChange(e) {
    dispatch(actionCreators.changeMessageText(e.target.value))
  }

  return (
    <div className={s.messagesSection}>
      <div className={s.dialogs}>
        {dialogs.map((e) => (
          <Dialog name={e.name} id={e.id} key={e.id} dispatch={dispatch} />
        ))}
      </div>
      <div className={s.messages}>
        {dialogs
          .find((e) => e.id === chosenUserId)
          .messages.map((e, i) => (
            <Message messageText={e} key={i} />
          ))}
        <div className={s.sendMessage}>
          <textarea
            placeholder="Tape your message"
            className={s.textArea}
            value={newMessageText}
            onChange={handleMessageTextChange}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              e.preventDefault()
              if (newMessageText.length > 0 && e.key === 'Enter') {
                handleSendMessage()
              }
            }}
          />
          <button
            className={`${s.sendMessageButton} ${
              newMessageText.length > 0 && s.sendMessageButton_active
            }`}
            onClick={handleSendMessage}
            disabled={messagesPage.newMessageText.length === 0}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  )
}
