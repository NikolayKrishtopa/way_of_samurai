import { ACTION_TYPES } from '../utils/action-creators'

const { SET_USER, SET_IS_LOADING } = ACTION_TYPES

let initialState = {
  isLoading: false,
  user: {},
  isLogged: false,
}

export default function profileReducer(state = initialState, action) {
  const stateCopy = { ...state }
  switch (action.type) {
    case SET_IS_LOADING:
      stateCopy.isLoading = action.isLoading
      return stateCopy
    case SET_USER:
      stateCopy.user = { ...action.user }
      if (Object.keys(stateCopy.user).length > 0) {
        stateCopy.isLogged = true
      } else {
        stateCopy.isLogged = false
      }
      return stateCopy
    default:
      return state
  }
}
