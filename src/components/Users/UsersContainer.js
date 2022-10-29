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
    onUnfollowUser,
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
      `https://social-network.samuraijs.com/api/1.0/users?${
        usersPage.showOnlyFriends ? `friend=${usersPage.showOnlyFriends}&` : ''
      }term=${usersPage.userSearch}`,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'API-KEY': '06fa1e34-2eda-4911-ba6d-106750cf7c2d',
        },
      }
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
      .then((res) =>
        setUsers([
          ...usersPage.users,
          ...res.items.filter((e) => !usersPage.users.includes(e)),
        ])
      )
      .catch((err) => console.log(console.log(err)))
      .finally(() => {
        setIsLoading(false)
      })
  }, [usersPage.page])

  function handleFollowUser(id) {
    setIsLoading(true)
    fetch(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': '06fa1e34-2eda-4911-ba6d-106750cf7c2d',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.resultCode === 0) {
          onFollowUser(id)
          return
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUnfollowUser(id) {
    setIsLoading(true)
    fetch(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': '06fa1e34-2eda-4911-ba6d-106750cf7c2d',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.resultCode === 0) {
          onUnfollowUser(id)
          return
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      {usersPage.isLoading && <PopupLoading />}
      <Users
        usersPage={usersPage}
        onFollowUser={handleFollowUser}
        onUnfollowUser={handleUnfollowUser}
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
  onUnfollowUser: actionCreators.unfollowUser,
  onExtendUsersList: actionCreators.extendUsersList,
  onShowAllUsers: actionCreators.showAllUsers,
  onShowOnlyFriends: actionCreators.showOnlyFriends,
  onChangeUserSearchText: actionCreators.changeUserSearchText,
  onSubmitUserSearch: actionCreators.submitUserSearch,
  setUsers: actionCreators.setUsers,
  setIsLoading: actionCreators.setIsLoading,
})(UsersContainer)
