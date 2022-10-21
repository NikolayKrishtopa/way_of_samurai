import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { usersPage: state.usersPage }
}

function mapDispatchToProps(dispatch) {
  return {
    onFollowUser: (id) => dispatch(actionCreators.followUser(id)),
    onExtendUsersList: () => {
      dispatch(actionCreators.extendUsersList())
    },
    onShowAllUsers: () => {
      dispatch(actionCreators.showAllUsers())
    },
    onShowOnlyFriends: () => {
      dispatch(actionCreators.showOnlyFriends())
    },
    onChangeUserSearchText: (text) => {
      dispatch(actionCreators.changeUserSearchText(text))
    },
    onSubmitUserSearch: () => {
      dispatch(actionCreators.submitUserSearch())
    },
    setUsers: (users) => {
      dispatch(actionCreators.setUsers(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, {
  onFollowUser: actionCreators.followUser,
  onExtendUsersList: actionCreators.extendUsersList,
  onShowAllUsers: actionCreators.showAllUsers,
  onShowOnlyFriends: actionCreators.showOnlyFriends,
  onChangeUserSearchText: actionCreators.changeUserSearchText,
  onSubmitUserSearch: actionCreators.submitUserSearch,
  setUsers: actionCreators.setUsers,
})(Users)

export default UsersContainer
