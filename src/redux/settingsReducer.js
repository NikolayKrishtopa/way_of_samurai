import { ACTION_TYPES } from '../utils/action-creators'
import actionCreators from '../utils/action-creators'
import { LANGUAGES, THEMES } from '../utils/action-creators'

const { SWITCH_LANGUAGE, SWITCH_THEME } = ACTION_TYPES

const initialState = {
  lang: '',
  theme: '',
}

export default function settingsReducer(state = initialState, action) {
  const stateCopy = { ...state }
  switch (action.type) {
    case SWITCH_LANGUAGE:
      stateCopy.lang = action.lang
      return stateCopy
    case SWITCH_THEME:
      stateCopy.theme = action.theme
      return stateCopy
    default:
      return state
  }
}
