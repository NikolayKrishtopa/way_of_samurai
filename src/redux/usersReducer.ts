import { ACTION_TYPES } from '../utils/action-creators';
import actionCreators from '../utils/action-creators';
import { usersApi } from '../api/api';
import { IAction } from '../models/models';
import { UserType } from './authReducer';
import { Dispatch } from 'redux';

const {
  setIsLoading,
  setUsers,
  setTotalUsersQty,
  startFollowingReq,
  finishFollowingReq,
  followUser,
  unfollowUser,
} = actionCreators;

export type UsersStateType = {
  users: Array<any>;
  usersShownPerPage: number;
  totalUsersQty: number;
  page: number;
  isOnlyFriendsShown: boolean;
  searchUserTextValue: string;
  userSearch: string;
  isLoading: boolean;
  followingInProcessList: Array<any>;
};

const initialState: UsersStateType = {
  users: [],
  usersShownPerPage: 10,
  totalUsersQty: 0,
  page: 1,
  isOnlyFriendsShown: false,
  searchUserTextValue: '',
  userSearch: '',
  isLoading: false,
  followingInProcessList: [],
};

export default function usersReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ACTION_TYPES.SET_USERS: {
      const stateCopy = { ...state, users: action.users };
      return stateCopy;
    }
    case ACTION_TYPES.FOLLOW_USER: {
      const stateCopy = {
        ...state,
        users: [...state.users].filter((e) =>
          e.id === action.id ? { ...e } : e
        ),
      };
      const user = stateCopy.users.find((e) => e.id === action.id);
      if (user) user.followed = true;
      return stateCopy;
    }
    case ACTION_TYPES.UNFOLLOW_USER: {
      const stateCopy = {
        ...state,
        users: [...state.users].filter((e) =>
          e.id === action.id ? { ...e } : e
        ),
      };
      stateCopy.users.find((e) => e.id === action.id).followed = false;
      return stateCopy;
    }
    case ACTION_TYPES.SET_USERS_PAGE: {
      const stateCopy = { ...state };
      stateCopy.page = action.page as number;
      return stateCopy;
    }
    case ACTION_TYPES.SHOW_ALL_USERS: {
      const stateCopy = { ...state };
      stateCopy.isOnlyFriendsShown = false;
      return stateCopy;
    }
    case ACTION_TYPES.SHOW_ONLY_FRIENDS: {
      const stateCopy = { ...state };
      stateCopy.isOnlyFriendsShown = true;
      return stateCopy;
    }
    case ACTION_TYPES.CHANGE_USER_SEARCH_TEXT: {
      const stateCopy = { ...state };
      stateCopy.searchUserTextValue = action.text as string;
      return stateCopy;
    }
    case ACTION_TYPES.SUBMIT_USER_SEARCH: {
      const stateCopy = { ...state, userSearch: state.searchUserTextValue };
      return stateCopy;
    }
    case ACTION_TYPES.SET_IS_LOADING: {
      const stateCopy = { ...state, isLoading: action.isLoading };
      return stateCopy;
    }
    case ACTION_TYPES.START_FOLLOWING_REQ: {
      const stateCopy = {
        ...state,
        followingInProcessList: [...state.followingInProcessList, action.id],
      };
      return stateCopy;
    }
    case ACTION_TYPES.FINISH_FOLLOWING_REQ: {
      const stateCopy = {
        ...state,
        followingInProcessList: state.followingInProcessList.filter(
          (e) => e !== action.id
        ),
      };
      return stateCopy;
    }
    case ACTION_TYPES.SET_TOTAL_USERS_QTY: {
      const stateCopy = {
        ...state,
        totalUsersQty: action.qty,
      };
      return stateCopy;
    }
    default:
      return state;
  }
}
// ***thunkCreators***

export const getUsers =
  (
    isOnlyFriendsShown: boolean,
    page: number,
    userSearch: string,
    initialUsers = []
  ) =>
  (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    usersApi
      .getUsers(isOnlyFriendsShown, page, userSearch)
      .then((res) => {
        initialUsers.length > 0
          ? dispatch(
              setUsers([
                ...initialUsers,
                ...res.data.items.filter(
                  (e: { id: number }) =>
                    !initialUsers.some((i: { id: number }) => i.id === e.id)
                ),
              ])
            )
          : dispatch(setUsers([...res.data.items]));
        dispatch(setTotalUsersQty(res.data.totalCount));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(actionCreators.setIsLoading(false));
      });
  };

export const doFollowUser = (id: number) => (dispatch: Dispatch) => {
  dispatch(startFollowingReq(id));
  usersApi
    .followUser(id)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followUser(id));
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(finishFollowingReq(id));
    });
};

export const doUnfollowUser =
  (id: number, users: Array<any>) => (dispatch: Dispatch) => {
    dispatch(startFollowingReq(id));
    usersApi
      .unfollowUser(id)
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(unfollowUser(id));
          dispatch(setUsers(users.filter((e) => e.id !== id)));
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(finishFollowingReq(id));
      });
  };
