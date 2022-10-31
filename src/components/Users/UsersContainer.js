import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import PopupLoading from '../PopupLoading/PopupLoading'
import { usersApi } from '../../api/api'
import {
  getUsers,
  doFollowUser,
  doUnfollowUser,
} from '../../redux/usersReducer'

const {
  setPage,
  showAllUsers,
  showOnlyFriends,
  changeUserSearchText,
  submitUserSearch,
  setIsLoading,
} = actionCreators

function UsersContainer(props) {
  const {
    usersPage,
    setPage,
    showAllUsers,
    showOnlyFriends,
    changeUserSearchText,
    submitUserSearch,
    getUsers,
    doFollowUser,
    doUnfollowUser,
  } = props

  const {
    isOnlyFriendsShown,
    page,
    userSearch,
    usersShownPerPage,
    users,
    isLoading,
    totalUsersQty,
  } = usersPage

  useEffect(() => {
    setPage(1)
    getUsers(isOnlyFriendsShown, page, userSearch)
  }, [userSearch, isOnlyFriendsShown])

  useEffect(() => {
    if (page === 1) {
      return
    }
    getUsers(isOnlyFriendsShown, page, userSearch, users)
  }, [page])

  return (
    <>
      {isLoading && <PopupLoading />}
      <Users
        usersPage={usersPage}
        onFollowUser={doFollowUser}
        onUnfollowUser={(id) => doUnfollowUser(id, users)}
        onSetPage={setPage}
        onShowAllUsers={showAllUsers}
        onShowOnlyFriends={showOnlyFriends}
        onChangeUserSearchText={changeUserSearchText}
        onSubmitUserSearch={submitUserSearch}
        isExtendButtonDisabled={totalUsersQty <= usersShownPerPage}
      />
    </>
  )
}

function mapStateToProps(state) {
  return { usersPage: state.usersPage }
}

export default connect(mapStateToProps, {
  setPage,
  showAllUsers,
  showOnlyFriends,
  changeUserSearchText,
  submitUserSearch,
  setIsLoading,
  getUsers,
  doFollowUser,
  doUnfollowUser,
})(UsersContainer)
