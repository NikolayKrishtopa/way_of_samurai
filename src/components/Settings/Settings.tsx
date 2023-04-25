import { LanguageType, ThemeType } from '../../models/models';
import { StoreType } from '../../redux/store-redux';
import actionCreators from '../../utils/action-creators';
import { connect } from 'react-redux';
const s = require('./Settings.module.css');

const { switchLang, switchTheme } = actionCreators;

export type SettingsPropsType = {
  theme: ThemeType;
  lang: LanguageType;
  switchLang: (lang: LanguageType) => void;
  switchTheme: (theme: ThemeType) => void;
};

function Settings(props: SettingsPropsType) {
  const { theme, lang, switchLang, switchTheme } = props;
  return (
    <div className='settings'>
      <div className={s.switchThemeBlock}>
        <h3>
          {lang === 'EN'
            ? 'Choose the color scheme of the application'
            : 'Выберите цветовую схему приложения'}
        </h3>
        <button
          className={s.switchThemeItem}
          onClick={() => switchTheme('DARK')}
        >
          {lang === 'EN' ? 'Dark theme' : 'Тёмная тема'}
        </button>
        <button
          className={s.switchThemeItem}
          onClick={() => switchTheme('LIGHT')}
        >
          {lang === 'EN' ? 'Light theme' : 'Светлая тема'}
        </button>
      </div>
      <div className={s.switchLangBlock}>
        <h3>{lang === 'EN' ? 'Choose language' : 'Выберите язык'}</h3>
        <button className={s.switchLangButton} onClick={() => switchLang('RU')}>
          Русский
        </button>
        <button className={s.switchLangButton} onClick={() => switchLang('EN')}>
          English
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state: StoreType) {
  return {
    theme: state.settings.theme,
    lang: state.settings.lang,
  };
}

export default connect(mapStateToProps, {
  switchLang,
  switchTheme,
})(Settings);
