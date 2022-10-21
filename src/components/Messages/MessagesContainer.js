import Messages from './Messages'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  }
}

const MessagesContainer = connect(mapStateToProps, {
  onSendMessage: actionCreators.sendMessage,
  onMessageTextChange: actionCreators.changeMessageText,
  onSwitchCompanionId: actionCreators.switchCompanionId,
})(Messages)

export default MessagesContainer
