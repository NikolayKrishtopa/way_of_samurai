import { useEffect } from 'react'
import User from './User/User'
import s from './Users.module.css'

export default function Users(props) {
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

  // const buttonExtendDisabled = usersPage.usersShownPerPage >= usersArraySorted.length

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
    <>
      <div className={s.usersNavbar}>
        <button
          className={`${s.showOnlyFriendsButton} ${
            !usersPage.showOnlyFriends && s.showOnlyFriendsButton_active
          }`}
          onClick={onShowAllUsers}
        >
          Все пользователи
        </button>
        <button
          className={`${s.showOnlyFriendsButton} ${
            usersPage.showOnlyFriends && s.showOnlyFriendsButton_active
          }`}
          onClick={onShowOnlyFriends}
        >
          Мои друзья
        </button>
        <input
          type="text"
          className={s.searchLine}
          placeholder="Введите имя пользователя"
          value={usersPage.searchUserTextValue}
          onChange={(e) => onChangeUserSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSubmitUserSearch()}
        />
      </div>
      <div className={s.users}>
        {usersPage.users.map((e) => (
          <User key={e.id} user={e} onFollowUser={onFollowUser} />
        ))}
      </div>
      <button
        className={`${s.showMoreUsersButton}`}
        onClick={onExtendUsersList}
        // disabled={buttonExtendDisabled}
      >
        Показать еще
      </button>
    </>
  )
}
