import Messages from './Messages'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    onSendMessage: () => dispatch(actionCreators.sendMessage()),
    onMessageTextChange: text => dispatch(actionCreators.changeMessageText(text)),
    onSwitchCompanionId: id => {
      dispatch(actionCreators.switchCompanionId(id))
      console.log(id)
    }
  }
}  

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
