import { Dispatch } from 'redux';
import { profileApi } from '../api/api';
import { IAction, ProfileType } from '../models/models';
import { ACTION_TYPES } from '../utils/action-creators';
import actionCreators from '../utils/action-creators';

const { setUserProfile, setUserStatus, setIsLoading } = actionCreators;

const { ADD_POST, SET_PROFILE, SET_USER_STATUS, SET_IS_LOADING } = ACTION_TYPES;

export type ProfileStateType = {
  profile: ProfileType;
  isLoading: boolean;
};
let initialState: ProfileStateType = {
  profile: {
    aboutMe: '',
    contacts: {},
    lookingForAJob: false,
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
};

export default function profileReducer(state = initialState, action: IAction) {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_PROFILE:
      stateCopy.profile = { ...action.profile, posts: [] } as ProfileType;
      return stateCopy;
    case SET_USER_STATUS:
      stateCopy.profile = { ...state.profile, status: action.status as string };
      return stateCopy;
    case ADD_POST:
      stateCopy.profile = { ...state.profile };
      stateCopy.profile.posts = [...state.profile.posts];
      const post = {
        text: action.postText,
        id: stateCopy.profile.posts.length + 1,
        likes: 0,
      };
      stateCopy.profile.posts = [post, ...stateCopy.profile.posts];
      return stateCopy;
    case SET_IS_LOADING:
      stateCopy.isLoading = action.isLoading;
      return stateCopy;
    default:
      return state;
  }
}

export const doUpdateProfile = (userId: number) => (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  profileApi
    .getUserData(userId)
    .then((res) => {
      profileApi
        .getUserStatus(userId)
        .then((status) => {
          dispatch(setUserProfile(res.data));
          dispatch(setUserStatus(status.data));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err))
    .finally(() => dispatch(setIsLoading(false)));
};

export const doSetStatus =
  (statusText: string, currentStatus: string) => (dispatch: Dispatch) => {
    if (currentStatus === statusText) return;
    dispatch(setUserStatus('status updating...'));
    profileApi
      .updateMyStatus(statusText)
      .then(() => dispatch(setUserStatus(statusText)))
      .catch((err) => {
        console.log(err);
        dispatch(setUserStatus(currentStatus));
      });
  };
