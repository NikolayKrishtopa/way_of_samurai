import Users from './Users.jsx';
import actionCreators from '../../utils/action-creators.js';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ProtectedRoute from '../../hok/ProtectedRoute.js';

import {
  getUsers,
  doFollowUser,
  doUnfollowUser,
  UsersStateType,
} from '../../redux/usersReducer.js';
import { LanguageType } from '../../models/models.js';
import { StoreType } from '../../redux/store-redux.js';

const {
  setPage,
  showAllUsers,
  showOnlyFriends,
  changeUserSearchText,
  submitUserSearch,
  setIsLoading,
} = actionCreators;

export type UsersContainerPropsType = {
  usersPage: UsersStateType;
  setPage: (page: number) => void;
  showAllUsers: () => void;
  showOnlyFriends: () => void;
  changeUserSearchText: (text: string) => void;
  submitUserSearch: () => void;
  getUsers: any;
  doFollowUser: any;
  doUnfollowUser: any;
  lang: LanguageType;
};

function UsersContainer(props: UsersContainerPropsType) {
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
    lang,
  } = props;

  const {
    isOnlyFriendsShown,
    page,
    userSearch,
    usersShownPerPage,
    users,
    totalUsersQty,
  } = usersPage;

  useEffect(() => {
    setPage(1);
    getUsers(isOnlyFriendsShown, page, userSearch);
  }, [userSearch, isOnlyFriendsShown]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    getUsers(isOnlyFriendsShown, page, userSearch, users);
  }, [page]);

  return (
    <Users
      usersPage={usersPage}
      onFollowUser={doFollowUser}
      onUnfollowUser={(id: number) => doUnfollowUser(id, users)}
      onSetPage={setPage}
      onShowAllUsers={showAllUsers}
      onShowOnlyFriends={showOnlyFriends}
      onChangeUserSearchText={changeUserSearchText}
      onSubmitUserSearch={submitUserSearch}
      isExtendButtonDisabled={totalUsersQty <= usersShownPerPage}
      lang={lang}
    />
  );
  // <>
  //   {isLoading && <PopupLoading lang={lang} />}

  // </>
}

function mapStateToProps(state: StoreType) {
  return {
    usersPage: state.usersPage,
    isLogged: state.auth.isLogged,
    lang: state.settings.lang,
  };
}

export default compose(
  connect(mapStateToProps, {
    setPage,
    showAllUsers,
    showOnlyFriends,
    changeUserSearchText,
    submitUserSearch,
    setIsLoading,
    getUsers,
    doFollowUser,
    doUnfollowUser,
  }),
  ProtectedRoute
)(UsersContainer);
