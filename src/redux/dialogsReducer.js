const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'
const CHOOSE_USER = 'CHOOSE-USER'

export default function dialogsReducer(state, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      state.dialogs
        .find((e) => e.id === state.chosenUserId)
        .messages.push(state.newMessageText)
      state.newMessageText = ''
      return state
    case CHANGE_MESSAGE_TEXT:
      state.newMessageText = action.messageText
      return state
    case CHOOSE_USER:
      state.chosenUserId = action.id
      return state
    default:
      return state
  }
}
