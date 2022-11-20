import { profileApi } from '../api/api'
import { ACTION_TYPES } from '../utils/action-creators'
import actionCreators from '../utils/action-creators'

const { setUserProfile, setUserStatus, setIsLoading } = actionCreators

const { ADD_POST, SET_PROFILE, SET_USER_STATUS, SET_IS_LOADING } = ACTION_TYPES

let initialState = {
  profile: {
    aboutMe: '',
    contacts: {},
    lookingForAJob: '',
    lookingForAJobDescription: '',
    fullName: '',
    userId: '',
    photos: {
      small: '',
      large: '',
    },
    status: '',
    posts: [],
  },
  isLoading: false,
}

export default function profileReducer(state = initialState, action) {
  const stateCopy = { ...state }
  switch (action.type) {
    case SET_PROFILE:
      stateCopy.profile = { ...action.profile, posts: [] }
      return stateCopy
    case SET_USER_STATUS:
      stateCopy.profile = { ...state.profile, status: action.status }
      return stateCopy
    case ADD_POST:
      stateCopy.profile = { ...state.profile }
      stateCopy.posts = [...state.profile.posts]
      stateCopy.profile.posts.unshift({
        text: action.postText,
        id: stateCopy.profile.posts.length + 1,
        likes: 0,
      })
      return stateCopy
    case SET_IS_LOADING:
      stateCopy.isLoading = action.isLoading
      return stateCopy
    default:
      return state
  }
}

export const doUpdateProfile = (userId) => (dispatch) => {
  dispatch(setIsLoading(true))
  profileApi
    .getUserData(userId)
    .then((res) => {
      profileApi
        .getUserStatus(userId)
        .then((status) => {
          dispatch(setUserProfile(res.data))
          dispatch(setUserStatus(status.data))
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
    .finally(() => dispatch(setIsLoading(false)))
}

export const doSetStatus = (statusText, currentStatus) => (dispatch) => {
  if (currentStatus === statusText) return
  dispatch(setUserStatus('status updating...'))
  profileApi
    .updateMyStatus(statusText)
    .then(() => dispatch(setUserStatus(statusText)))
    .catch((err) => {
      console.log(err)
      dispatch(setUserStatus(currentStatus))
    })
}
