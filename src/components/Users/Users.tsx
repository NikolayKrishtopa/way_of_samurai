import { LanguageType } from '../../models/models';
import { UsersStateType } from '../../redux/usersReducer';
import User from './User/User';
const s = require('./Users.module.css');

export type UsersPropsType = {
  usersPage: UsersStateType;
  onFollowUser: any;
  onUnfollowUser: any;
  onSetPage: (page: number) => void;
  onShowAllUsers: () => void;
  onShowOnlyFriends: () => void;
  onChangeUserSearchText: (text: string) => void;
  onSubmitUserSearch: () => void;
  isExtendButtonDisabled: boolean;
  lang: LanguageType;
};

export default function Users(props: UsersPropsType) {
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
    lang,
  } = props;

  return (
    <>
      <div className={s.usersNavbar}>
        <button
          className={`${s.showOnlyFriendsButton} ${
            !usersPage.isOnlyFriendsShown && s.showOnlyFriendsButton_active
          }`}
          onClick={onShowAllUsers}
        >
          {lang === 'RU' ? 'Все пользователи' : 'Get all users'}
        </button>
        <button
          className={`${s.showOnlyFriendsButton} ${
            usersPage.isOnlyFriendsShown && s.showOnlyFriendsButton_active
          }`}
          onClick={onShowOnlyFriends}
        >
          {lang === 'RU' ? 'Мои друзья' : 'My friends'}
        </button>
        <input
          type='text'
          className={s.searchLine}
          placeholder={lang === 'RU' ? 'Введите имя пользователя' : 'Find user'}
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
            followingInProgress={usersPage.followingInProcessList.some((u) => {
              return e.id === u;
            })}
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
        {lang === 'RU' ? 'Показать еще' : 'Show more'}
      </button>
    </>
  );
}
