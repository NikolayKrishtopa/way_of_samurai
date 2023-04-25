import { DialogStateType } from '../../redux/dialogsReducer';
import { DialogType } from '../../models/models';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
const s = require('./Messages.module.css');

export type MessagesPropsType = {
  messagesPage: DialogStateType;
  onMessageTextChange: (e: any) => void;
  onSwitchCompanionId: (id: number) => void;
  onSendMessage: () => void;
};

export default function Messages(props: MessagesPropsType) {
  const {
    messagesPage,
    onMessageTextChange,
    onSwitchCompanionId,
    onSendMessage,
  } = props;
  const { dialogs, newMessageText, chosenCompanionId } = messagesPage;
  const dialog = dialogs.find((e) => e.id === chosenCompanionId) as DialogType;
  return (
    <div className={s.messagesSection}>
      <div className={s.dialogs}>
        {dialogs.map((e) => (
          <Dialog
            name={e.name}
            id={e.id}
            key={e.id}
            onSwitchCompanionId={onSwitchCompanionId}
          />
        ))}
      </div>
      <div className={s.messages}>
        {dialog.messages.map((e, i) => (
          <Message messageText={e} key={i} />
        ))}
        <div className={s.sendMessage}>
          <textarea
            placeholder='Tape your message'
            className={s.textArea}
            value={newMessageText}
            onChange={(e: any) => onMessageTextChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return;
              e.preventDefault();
              if (newMessageText.length > 0 && e.key === 'Enter') {
                onSendMessage();
              }
            }}
          />
          <button
            className={`${s.sendMessageButton} ${
              newMessageText.length > 0 && s.sendMessageButton_active
            }`}
            onClick={onSendMessage}
            disabled={messagesPage.newMessageText.length === 0}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
