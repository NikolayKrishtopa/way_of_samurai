import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import settingsReducer from './settingsReducer';
import thunkMiddleware from 'redux-thunk';

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
