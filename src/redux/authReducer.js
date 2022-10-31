import { ACTION_TYPES } from '../utils/action-creators'
import actionCreators from '../utils/action-creators'
import { authApi } from '../api/api'

const { setIsLoading, setUser } = actionCreators

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

export const handleSubmitLoginReq =
  (values, redirectSuccess, redirectFail) => (dispatch) => {
    dispatch(setIsLoading(true))
    authApi
      .login(values)
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(setUser(res.data.data))
          redirectSuccess()
        } else {
          redirectFail()
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }

export const checkIfAuthorised =
  (redirectSuccess, redirectFail) => (dispatch) => {
    dispatch(setIsLoading(true))
    authApi
      .checkAuth()
      .then((res) => {
        if (res.data.resultCode === 1) {
          redirectFail()
          return
        }
        dispatch(setUser(res.data.data))
        redirectSuccess()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }

export const handleLogOut = (redirectSuccess) => (dispatch) => {
  dispatch(setIsLoading(true))
  authApi
    .logout()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setUser({}))
        redirectSuccess()
      }
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
}
