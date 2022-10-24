import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import PopupLoading from '../PopupLoading/PopupLoading'

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
    setIsLoading,
  } = props

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?term=${usersPage.userSearch}&friend=${usersPage.showOnlyFriends}`
    )
      .then((res) => res.json())
      .then((res) => setUsers(res.items))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [usersPage.userSearch, usersPage.showOnlyFriends])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?page=${usersPage.page}&term=${usersPage.userSearch}&friend=${usersPage.showOnlyFriends}`
    )
      .then((res) => res.json())
      .then((res) => setUsers([...usersPage.users, ...res.items]))
      .catch((err) => console.log(console.log(err)))
      .finally(() => {
        setIsLoading(false)
      })
  }, [usersPage.page])

  return (
    <>
      {usersPage.isLoading && <PopupLoading />}
      <Users
        usersPage={usersPage}
        onFollowUser={onFollowUser}
        onExtendUsersList={onExtendUsersList}
        onShowAllUsers={onShowAllUsers}
        onShowOnlyFriends={onShowOnlyFriends}
        onChangeUserSearchText={onChangeUserSearchText}
        onSubmitUserSearch={onSubmitUserSearch}
      />
    </>
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
  setIsLoading: actionCreators.setIsLoading,
})(UsersContainer)
