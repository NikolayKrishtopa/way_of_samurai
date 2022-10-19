import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store
