import User from './User/User'
import s from './Users.module.css'

export default function Users(props) {
  const { usersPage,
    onFollowUser,
    onExtendUsersList,
    onShowAllUsers,
    onShowOnlyFriends,
    onChangeUserSearchText } = props
  const usersArray = usersPage.showOnlyFriends
    ? usersPage.users.filter(e => e.isFollowed===true)
    : usersPage.users
  const usersArraySorted = usersPage.searchUserTextValue.length>0
    ? usersArray.filter(e => e.name.toLowerCase().includes(usersPage.searchUserTextValue.toLowerCase()))
    : usersArray
  const buttonExtendDisabled = usersPage.usersShownPerPage >= usersArraySorted.length
  return (
    <>
      <div className={s.usersNavbar}>
        <button
          className={`${s.showOnlyFriendsButton} ${!usersPage.showOnlyFriends && s.showOnlyFriendsButton_active}`}
          onClick={onShowAllUsers}
        >
          Все пользователи
        </button>
        <button
          className={`${s.showOnlyFriendsButton} ${usersPage.showOnlyFriends && s.showOnlyFriendsButton_active}`}
          onClick={onShowOnlyFriends}
        >
          Мои друзья
        </button>
        <input
          type='text'
          className={s.searchLine}
          placeholder='Введите имя пользователя'
          value={usersPage.searchUserTextValue}
          onChange={e => onChangeUserSearchText(e.target.value)}
        />
      </div>
      <div className={s.users}>
        {usersArraySorted.slice(0, usersPage.usersShownPerPage).map(e => (
        <User key={e.id} user={e} onFollowUser={onFollowUser} />
      )
      )}
    </div>
      <button
        className={`${s.showMoreUsersButton} ${buttonExtendDisabled && s.showMoreUsersButton_disabled}`}
        onClick={onExtendUsersList}
        disabled={buttonExtendDisabled}
      >Показать еще</button>
      </>
)

}