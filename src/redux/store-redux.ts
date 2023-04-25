import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer, { DialogStateType } from './dialogsReducer';
import usersReducer, { UsersStateType } from './usersReducer';
import authReducer, { AuthStateType } from './authReducer';
import settingsReducer, { SettingsStateType } from './settingsReducer';
import thunkMiddleware from 'redux-thunk';

export type StoreType = {
  profilePage: AuthStateType;
  messagesPage: DialogStateType;
  usersPage: UsersStateType;
  auth: AuthStateType;
  settings: SettingsStateType;
};

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  settings: settingsReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
