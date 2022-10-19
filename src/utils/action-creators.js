const ACTION_TYPES = {
  ADD_POST: 'ADD-POST',
  CHANGE_POST_TEXT: 'CHANGE-POST-TEXT',
  SEND_MESSAGE: 'ADD-MESSAGE',
  CHANGE_MESSAGE_TEXT: 'CHANGE-MESSAGE-TEXT',
  SWITCH_COMPANION: 'SWITCH-COMPANION',
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
  switchCompanionId: (id) => ({
    type: ACTION_TYPES.SWITCH_COMPANION,
    id: id,
  }),
}
export default actionCreators
