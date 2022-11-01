import Messages from './Messages'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute'
import { compose } from 'redux'

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    messagesPage: state.messagesPage,
  }
}

export default compose(
  connect(mapStateToProps, {
    onSendMessage: actionCreators.sendMessage,
    onMessageTextChange: actionCreators.changeMessageText,
    onSwitchCompanionId: actionCreators.switchCompanionId,
  }),
  ProtectedRoute
)(Messages)
