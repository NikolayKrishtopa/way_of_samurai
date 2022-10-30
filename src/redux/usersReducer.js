import { ACTION_TYPES } from '../utils/action-creators'

let initialState = {
  users: [],
  usersShownPerPage: 10,
  page: 1,
  showOnlyFriends: false,
  searchUserTextValue: '',
  userSearch: '',
  isLoading: false,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_USERS: {
      const stateCopy = { ...state, users: action.users }
      return stateCopy
    }
    case ACTION_TYPES.FOLLOW_USER: {
      const stateCopy = {
        ...state,
        users: [...state.users].filter((e) =>
          e.id === action.id ? { ...e } : e
        ),
      }
      stateCopy.users.find((e) => e.id === action.id).followed = true
      return stateCopy
    }
    case ACTION_TYPES.UNFOLLOW_USER: {
      const stateCopy = {
        ...state,
        users: [...state.users].filter((e) =>
          e.id === action.id ? { ...e } : e
        ),
      }
      stateCopy.users.find((e) => e.id === action.id).followed = false
      return stateCopy
    }
    case ACTION_TYPES.SET_PAGE: {
      const stateCopy = { ...state }
      stateCopy.page = action.page
      return stateCopy
    }
    case ACTION_TYPES.SHOW_ALL_USERS: {
      const stateCopy = { ...state }
      stateCopy.showOnlyFriends = false
      return stateCopy
    }
    case ACTION_TYPES.SHOW_ONLY_FRIENDS: {
      const stateCopy = { ...state }
      stateCopy.showOnlyFriends = true
      return stateCopy
    }
    case ACTION_TYPES.CHANGE_USER_SEARCH_TEXT: {
      const stateCopy = { ...state }
      stateCopy.searchUserTextValue = action.text
      return stateCopy
    }
    case ACTION_TYPES.SUBMIT_USER_SEARCH: {
      const stateCopy = { ...state, userSearch: state.searchUserTextValue }
      return stateCopy
    }
    case ACTION_TYPES.SET_IS_LOADING: {
      const stateCopy = { ...state, isLoading: action.isLoading }
      return stateCopy
    }
    default:
      return state
  }
}
