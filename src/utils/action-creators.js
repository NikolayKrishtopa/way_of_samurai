const ACTION_TYPES = {
  ADD_POST: 'ADD-POST',
  CHANGE_POST_TEXT: 'CHANGE-POST-TEXT',
  SEND_MESSAGE: 'ADD-MESSAGE',
  CHANGE_MESSAGE_TEXT: 'CHANGE-MESSAGE-TEXT',
  SWITCH_COMPANION: 'SWITCH-COMPANION',
  FOLLOW_USER: 'FOLLOW-USER',
  UNFOLLOW_USER: 'UNFOLLOW-USER',
  SET_PAGE: 'SET-PAGE',
  CHANGE_SHOW_USERS_MODE: 'CHANGE-SHOW-USERS-MODE',
  SHOW_ALL_USERS: 'SHOW-ALL-USERS',
  SHOW_ONLY_FRIENDS: 'SHOW-ONLY-FRIENDS',
  CHANGE_USER_SEARCH_TEXT: 'CHANGE-USER-SEARCH-TEXT',
  SET_USERS: 'SET_USERS',
  SUBMIT_USER_SEARCH: 'SUBMIT-USER-SEARCH',
  SET_IS_LOADING: 'SET-IS-LOADING',
  SET_USER: 'SET-USER',
}

const actionCreators = {
  addPost: () => ({ type: ACTION_TYPES.ADD_POST }),
  changePostText: (text) => ({
    type: ACTION_TYPES.CHANGE_POST_TEXT,
    postText: text,
  }),
  sendMessage: () => ({ type: ACTION_TYPES.SEND_MESSAGE }),
  changeMessageText: (text) => ({
    type: ACTION_TYPES.CHANGE_MESSAGE_TEXT,
    messageText: text,
  }),
  switchCompanionId: (id) => ({
    type: ACTION_TYPES.SWITCH_COMPANION,
    id: id,
  }),
  followUser: (id) => ({
    type: ACTION_TYPES.FOLLOW_USER,
    id,
  }),
  unfollowUser: (id) => ({
    type: ACTION_TYPES.UNFOLLOW_USER,
    id,
  }),
  setPage: (page) => ({
    type: ACTION_TYPES.SET_PAGE,
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
  changeUserSearchText: (text) => ({
    type: ACTION_TYPES.CHANGE_USER_SEARCH_TEXT,
    text: text,
  }),
  submitUserSearch: () => ({
    type: ACTION_TYPES.SUBMIT_USER_SEARCH,
  }),
  setUsers: (users) => ({
    type: ACTION_TYPES.SET_USERS,
    users,
  }),
  setIsLoading: (isLoading) => ({
    type: ACTION_TYPES.SET_IS_LOADING,
    isLoading,
  }),
  setUser: (user) => ({
    type: ACTION_TYPES.SET_USER,
    user,
  }),
}
export default actionCreators

export { ACTION_TYPES }
