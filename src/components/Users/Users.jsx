import User from './User/User'
import s from './Users.module.css'

export default function Users(props) {
  const {
    usersPage,
    onFollowUser,
    onUnfollowUser,
    onSetPage,
    onShowAllUsers,
    onShowOnlyFriends,
    onChangeUserSearchText,
    onSubmitUserSearch,
    isExtendButtonDisabled,
  } = props

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
          <User
            key={e.id}
            user={e}
            onFollowUser={onFollowUser}
            onUnfollowUser={onUnfollowUser}
          />
        ))}
      </div>
      <button
        className={`${s.showMoreUsersButton} ${
          isExtendButtonDisabled && s.button_disabled
        }`}
        onClick={() => onSetPage(usersPage.page + 1)}
        disabled={isExtendButtonDisabled}
      >
        Показать еще
      </button>
    </>
  )
}
