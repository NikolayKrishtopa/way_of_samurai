import { ACTION_TYPES } from '../utils/action-creators';
import actionCreators from '../utils/action-creators';
import { authApi } from '../api/api';
import { IAction, LoginDataType } from '../models/models';
import { Dispatch } from 'redux';

const { setIsLoading, setUser } = actionCreators;

const { SET_USER, SET_IS_LOADING } = ACTION_TYPES;

export type UserType = {
  id: number | null;
  login: string | null;
  email: string | null;
};

export type AuthStateType = {
  isLoading: boolean;
  user: UserType;
  isLogged: boolean;
};

let initialState: AuthStateType = {
  isLoading: false,
  user: {
    id: null,
    login: null,
    email: null,
  },
  isLogged: false,
};

export default function profileReducer(state = initialState, action: IAction) {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_IS_LOADING:
      stateCopy.isLoading = action.isLoading;
      return stateCopy;
    case SET_USER:
      stateCopy.user = { ...action.user } as UserType;
      if (Object.keys(stateCopy.user).length > 0) {
        stateCopy.isLogged = true;
      } else {
        stateCopy.isLogged = false;
      }
      return stateCopy;
    default:
      return state;
  }
}

export const handleSubmitLoginReq =
  (
    values: LoginDataType,
    redirectSuccess: () => void,
    redirectFail: () => void
  ) =>
  (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    authApi
      .login(values)
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(setUser(res.data.data));
          redirectSuccess();
        } else {
          redirectFail();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const checkIfAuthorised =
  (redirectSuccess: () => void, redirectFail: () => void) =>
  (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    authApi
      .checkAuth()
      .then((res) => {
        if (res.data.resultCode === 1) {
          redirectFail();
          return;
        }
        dispatch(setUser(res.data.data));
        redirectSuccess();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const handleLogOut =
  (redirectSuccess: () => void) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    authApi
      .logout()
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(setUser({ id: null, login: null, email: null }));
          redirectSuccess();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
