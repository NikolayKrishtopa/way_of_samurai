import Messages from './Messages'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute'

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    messagesPage: state.messagesPage,
  }
}

export default connect(mapStateToProps, {
  onSendMessage: actionCreators.sendMessage,
  onMessageTextChange: actionCreators.changeMessageText,
  onSwitchCompanionId: actionCreators.switchCompanionId,
})(ProtectedRoute(Messages))
