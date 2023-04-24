import { IAction, LanguageType, ThemeType } from '../models/models';
import { ACTION_TYPES } from '../utils/action-creators';

const { SWITCH_LANGUAGE, SWITCH_THEME } = ACTION_TYPES;

export type SettingsStateType = {
  lang: LanguageType;
  theme: ThemeType;
};

const initialState = {
  lang: 'RU',
  theme: 'LIGHT',
};

export default function settingsReducer(state = initialState, action: IAction) {
  const stateCopy = { ...state };
  switch (action.type) {
    case SWITCH_LANGUAGE:
      stateCopy.lang = action.lang as LanguageType;
      return stateCopy;
    case SWITCH_THEME:
      stateCopy.theme = action.theme as ThemeType;
      return stateCopy;
    default:
      return state;
  }
}
