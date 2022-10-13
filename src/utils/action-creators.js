const ACTION_TYPES = {
  ADD_POST: 'ADD-POST',
  CHANGE_POST_TEXT: 'CHANGE-POST-TEXT',
  SEND_MESSAGE: 'ADD-MESSAGE',
  CHANGE_MESSAGE_TEXT: 'CHANGE-MESSAGE-TEXT',
  CHOOSE_USER: 'CHOOSE-USER',
}

const actionCreators = {
  addPost: () => ({ type: ACTION_TYPES.ADD_POST }),
  changePostText: (text) => ({
    type: ACTION_TYPES.CHANGE_POST_TEXT,
    postText: text,
  }),
  sendMessage: () => ({ type: ACTION_TYPES.SEND_MESSAGE }),
  changeMessageText: (text) => ({
    type: ACTION_TYPES.CHANGE_MESSAGE_TEXT,
    messageText: text,
  }),
  chooseUser: (id) => ({
    type: ACTION_TYPES.CHOOSE_USER,
    id: id,
  }),
}
export default actionCreators
