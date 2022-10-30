import Users from './Users'
import actionCreators from '../../utils/action-creators'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PopupLoading from '../PopupLoading/PopupLoading'
import { usersApi } from '../../api/api'

function UsersContainer(props) {
  const {
    usersPage,
    onFollowUser,
    onUnfollowUser,
    onSetPage,
    onShowAllUsers,
    onShowOnlyFriends,
    onChangeUserSearchText,
    onSubmitUserSearch,
    setUsers,
    setIsLoading,
    startFollowingReq,
    finishFollowingReq,
  } = props

  const [isExtendButtonDisabled, setIsExtendButtonDisabled] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    onSetPage(1)
    usersApi
      .getUsers(usersPage.showOnlyFriends, 1, usersPage.userSearch)
      .then((res) => {
        setUsers(res.data.items)
        console.log(res)
        res.data.totalCount <= usersPage.usersShownPerPage
          ? setIsExtendButtonDisabled(true)
          : setIsExtendButtonDisabled(false)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [usersPage.userSearch, usersPage.showOnlyFriends])

  useEffect(() => {
    if (usersPage.page === 1) {
      return
    }
    setIsLoading(true)
    usersApi
      .getUsers(usersPage.showOnlyFriends, usersPage.page, usersPage.userSearch)
      .then((res) => {
        setUsers([
          ...usersPage.users,
          ...res.data.items.filter((e) => !usersPage.users.includes(e)),
        ])
        res.data.totalCount <= usersPage.usersShownPerPage
          ? setIsExtendButtonDisabled(true)
          : setIsExtendButtonDisabled(false)
      })
      .catch((err) => console.log(console.log(err)))
      .finally(() => {
        setIsLoading(false)
      })
  }, [usersPage.page])

  function handleFollowUser(id) {
    startFollowingReq(id)
    usersApi
      .followUser(id)
      .then((res) => {
        console.log(res)
        if (res.data.resultCode === 0) {
          onFollowUser(id)
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
        console.log(res)
        if (res.data.resultCode === 0) {
          onUnfollowUser(id)
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
      {usersPage.isLoading && <PopupLoading />}
      <Users
        usersPage={usersPage}
        onFollowUser={handleFollowUser}
        onUnfollowUser={handleUnfollowUser}
        onSetPage={onSetPage}
        onShowAllUsers={onShowAllUsers}
        onShowOnlyFriends={onShowOnlyFriends}
        onChangeUserSearchText={onChangeUserSearchText}
        onSubmitUserSearch={onSubmitUserSearch}
        isExtendButtonDisabled={isExtendButtonDisabled}
      />
    </>
  )
}

function mapStateToProps(state) {
  return { usersPage: state.usersPage }
}

export default connect(mapStateToProps, {
  onFollowUser: actionCreators.followUser,
  onUnfollowUser: actionCreators.unfollowUser,
  onSetPage: actionCreators.setPage,
  onShowAllUsers: actionCreators.showAllUsers,
  onShowOnlyFriends: actionCreators.showOnlyFriends,
  onChangeUserSearchText: actionCreators.changeUserSearchText,
  onSubmitUserSearch: actionCreators.submitUserSearch,
  setUsers: actionCreators.setUsers,
  setIsLoading: actionCreators.setIsLoading,
  startFollowingReq: actionCreators.startFollowingReq,
  finishFollowingReq: actionCreators.finishFollowingReq,
})(UsersContainer)
