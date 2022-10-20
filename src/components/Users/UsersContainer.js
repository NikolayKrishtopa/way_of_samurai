import Users from "./Users"
import actionCreators from '../../utils/action-creators'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {usersPage: state.usersPage}
}

function mapDispatchToProps(dispatch) {
  return {
    onFollowUser: (id) => dispatch(actionCreators.followUser(id)),
    onExtendUsersList: () => { dispatch(actionCreators.extendUsersList()) },
    onShowAllUsers: () => { dispatch(actionCreators.showAllUsers()) },
    onShowOnlyFriends: () => { dispatch(actionCreators.showOnlyFriends()) },
    onChangeUserSearchText: (text) => { dispatch(actionCreators.changeUserSearchText(text)) }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer