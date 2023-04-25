const s = require('./Message.module.css');

export type MessagePropsType = {
  messageText: string;
};

export default function Message(props: MessagePropsType) {
  const { messageText } = props;

  return <div className={s.message}>{messageText}</div>;
}
