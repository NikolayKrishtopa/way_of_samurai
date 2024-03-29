import Messages from './Messages';
import actionCreators from '../../utils/action-creators';
import { connect } from 'react-redux';
import ProtectedRoute from '../../hok/ProtectedRoute';
import { compose } from 'redux';
import { StoreType } from '../../redux/store-redux';

function mapStateToProps(state: StoreType) {
  return {
    isLogged: state.auth.isLogged,
    messagesPage: state.messagesPage,
  };
}

export default compose(
  connect(mapStateToProps, {
    onSendMessage: actionCreators.sendMessage,
    onMessageTextChange: actionCreators.changeMessageText,
    onSwitchCompanionId: actionCreators.switchCompanionId,
  }),
  ProtectedRoute
)(Messages);
