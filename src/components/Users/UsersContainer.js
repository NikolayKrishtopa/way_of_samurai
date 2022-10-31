import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import PopupLoading from '../PopupLoading/PopupLoading'
import { usersApi } from '../../api/api'
import { getUsers } from '../../redux/usersReducer'

const {
  followUser,
  unfollowUser,
  setPage,
  showAllUsers,
  showOnlyFriends,
  changeUserSearchText,
  submitUserSearch,
  setUsers,
  setIsLoading,
  startFollowingReq,
  finishFollowingReq,
} = actionCreators

function UsersContainer(props) {
  const {
    usersPage,
    followUser,
    unfollowUser,
    setPage,
    showAllUsers,
    showOnlyFriends,
    changeUserSearchText,
    submitUserSearch,
    startFollowingReq,
    finishFollowingReq,
    getUsers,
    setUsers,
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

  function handleFollowUser(id) {
    startFollowingReq(id)
    usersApi
      .followUser(id)
      .then((res) => {
        console.log(res)
        if (res.data.resultCode === 0) {
          followUser(id)
          return
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        finishFollowingReq(id)
      })
  }

  function handleUnfollowUser(id) {
    startFollowingReq(id)
    usersApi
      .unfollowUser(id)
      .then((res) => {
        if (res.data.resultCode === 0) {
          unfollowUser(id)
          setUsers(users.filter((e) => e.id !== id))
          return
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        finishFollowingReq(id)
      })
  }

  return (
    <>
      {isLoading && <PopupLoading />}
      <Users
        usersPage={usersPage}
        onFollowUser={handleFollowUser}
        onUnfollowUser={handleUnfollowUser}
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
  followUser,
  unfollowUser,
  setPage,
  showAllUsers,
  showOnlyFriends,
  changeUserSearchText,
  submitUserSearch,
  setUsers,
  setIsLoading,
  startFollowingReq,
  finishFollowingReq,
  getUsers,
})(UsersContainer)
