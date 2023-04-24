import {
  LanguageType,
  ProfileType,
  ThemeType,
  UserType,
} from '../models/models';

const ACTION_TYPES = {
  ADD_POST: 'ADD-POST',
  SET_PROFILE: 'SET-PROFILE',
  SET_USER_STATUS: 'SET-USER-STATUS',
  SEND_MESSAGE: 'ADD-MESSAGE',
  CHANGE_MESSAGE_TEXT: 'CHANGE-MESSAGE-TEXT',
  SWITCH_COMPANION: 'SWITCH-COMPANION',
  FOLLOW_USER: 'FOLLOW-USER',
  UNFOLLOW_USER: 'UNFOLLOW-USER',
  SET_USERS_PAGE: 'SET-USERS-PAGE',
  CHANGE_SHOW_USERS_MODE: 'CHANGE-SHOW-USERS-MODE',
  SHOW_ALL_USERS: 'SHOW-ALL-USERS',
  SHOW_ONLY_FRIENDS: 'SHOW-ONLY-FRIENDS',
  CHANGE_USER_SEARCH_TEXT: 'CHANGE-USER-SEARCH-TEXT',
  SET_USERS: 'SET_USERS',
  SUBMIT_USER_SEARCH: 'SUBMIT-USER-SEARCH',
  SET_IS_LOADING: 'SET-IS-LOADING',
  SET_USER: 'SET-USER',
  START_FOLLOWING_REQ: 'START_FOLLOWING_REQ',
  FINISH_FOLLOWING_REQ: 'FINISH_FOLLOWING_REQ',
  SET_TOTAL_USERS_QTY: 'SET-TOTAL-USERS-QTY',
  SWITCH_LANGUAGE: 'SWITCH-LANGUAGE',
  SWITCH_THEME: 'SWITCH-THEME',
};

const actionCreators = {
  addPost: (postText: string) => ({
    type: ACTION_TYPES.ADD_POST,
    postText,
  }),
  setUserProfile: (profile: ProfileType) => ({
    type: ACTION_TYPES.SET_PROFILE,
    profile,
  }),
  setUserStatus: (status: string) => ({
    type: ACTION_TYPES.SET_USER_STATUS,
    status,
  }),
  sendMessage: () => ({ type: ACTION_TYPES.SEND_MESSAGE }),
  changeMessageText: (text: string) => ({
    type: ACTION_TYPES.CHANGE_MESSAGE_TEXT,
    messageText: text,
  }),
  switchCompanionId: (id: number) => ({
    type: ACTION_TYPES.SWITCH_COMPANION,
    id: id,
  }),
  followUser: (id: number) => ({
    type: ACTION_TYPES.FOLLOW_USER,
    id,
  }),
  unfollowUser: (id: number) => ({
    type: ACTION_TYPES.UNFOLLOW_USER,
    id,
  }),
  setPage: (page: number) => ({
    type: ACTION_TYPES.SET_USERS_PAGE,
    page,
  }),
  changeUserShowMode: () => ({
    type: ACTION_TYPES.CHANGE_SHOW_USERS_MODE,
  }),
  showAllUsers: () => ({
    type: ACTION_TYPES.SHOW_ALL_USERS,
  }),
  showOnlyFriends: () => ({
    type: ACTION_TYPES.SHOW_ONLY_FRIENDS,
  }),
  changeUserSearchText: (text: string) => ({
    type: ACTION_TYPES.CHANGE_USER_SEARCH_TEXT,
    text: text,
  }),
  submitUserSearch: () => ({
    type: ACTION_TYPES.SUBMIT_USER_SEARCH,
  }),
  setUsers: (users: UserType[]) => ({
    type: ACTION_TYPES.SET_USERS,
    users,
  }),
  setIsLoading: (isLoading: boolean) => ({
    type: ACTION_TYPES.SET_IS_LOADING,
    isLoading,
  }),
  setUser: (user: UserType) => ({
    type: ACTION_TYPES.SET_USER,
    user,
  }),
  startFollowingReq: (id: number) => ({
    type: ACTION_TYPES.START_FOLLOWING_REQ,
    id,
  }),
  finishFollowingReq: (id: number) => ({
    type: ACTION_TYPES.FINISH_FOLLOWING_REQ,
    id,
  }),
  setTotalUsersQty: (qty: number) => ({
    type: ACTION_TYPES.SET_TOTAL_USERS_QTY,
    qty,
  }),
  switchLang: (lang: LanguageType) => ({
    type: ACTION_TYPES.SWITCH_LANGUAGE,
    lang,
  }),
  switchTheme: (theme: ThemeType) => ({
    type: ACTION_TYPES.SWITCH_THEME,
    theme,
  }),
};
export default actionCreators;

export { ACTION_TYPES };
