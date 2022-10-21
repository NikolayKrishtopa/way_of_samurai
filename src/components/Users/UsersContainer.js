import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { useEffect } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { usersPage: state.usersPage }
}

function UsersContainer(props) {
  const {
    usersPage,
    onFollowUser,
    onExtendUsersList,
    onShowAllUsers,
    onShowOnlyFriends,
    onChangeUserSearchText,
    onSubmitUserSearch,
    setUsers,
  } = props

  useEffect(() => {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?term=${usersPage.userSearch}&friend=${usersPage.showOnlyFriends}`
    )
      .then((res) => res.json())
      .then((res) => setUsers(res.items))
  }, [usersPage.userSearch, usersPage.showOnlyFriends])

  useEffect(() => {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${usersPage.page}&term=${usersPage.userSearch}&friend=${usersPage.showOnlyFriends}`
    )
      .then((res) => res.json())
      .then((res) => setUsers([...usersPage.users, ...res.items]))
  }, [usersPage.page])

  return (
    <Users
      usersPage={usersPage}
      onFollowUser={onFollowUser}
      onExtendUsersList={onExtendUsersList}
      onShowAllUsers={onShowAllUsers}
      onShowOnlyFriends={onShowOnlyFriends}
      onChangeUserSearchText={onChangeUserSearchText}
      onSubmitUserSearch={onSubmitUserSearch}
    />
  )
}

export default connect(mapStateToProps, {
  onFollowUser: actionCreators.followUser,
  onExtendUsersList: actionCreators.extendUsersList,
  onShowAllUsers: actionCreators.showAllUsers,
  onShowOnlyFriends: actionCreators.showOnlyFriends,
  onChangeUserSearchText: actionCreators.changeUserSearchText,
  onSubmitUserSearch: actionCreators.submitUserSearch,
  setUsers: actionCreators.setUsers,
})(UsersContainer)
