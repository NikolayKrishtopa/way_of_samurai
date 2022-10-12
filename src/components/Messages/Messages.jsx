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
        <div className={s.sendMessage}>
          <textarea
            placeholder="Tape your message"
            className={s.textArea}
            // value={profile.newPostText}
            // onChange={handlePostTextChange}
          />
          <button
            className={`${s.sendMessageButton} ${s.sendMessageButton_active}`}
            // onClick={handleAddPost}
            // disabled={profile.newPostText.length === 0}
          >
            Add post
          </button>
        </div>
      </div>
    </div>
  )
}
