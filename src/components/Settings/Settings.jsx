import actionCreators from '../../utils/action-creators'
import { LANGUAGES, THEMES } from '../../utils/action-creators'
import { connect } from 'react-redux'
import s from './Settings.module.css'

const { switchLang, switchTheme } = actionCreators

function Settings(props) {
  const { theme, lang, switchLang, switchTheme } = props
  return (
    <div className="settings">
      <div className={s.switchThemeBlock}>
        <h3>
          {lang === LANGUAGES.EN
            ? 'Choose the color scheme of the application'
            : 'Выберите цветовую схему приложения'}
        </h3>
        <button
          className={s.switchThemeItem}
          onClick={() => switchTheme(THEMES.DARK)}
        >
          {lang === LANGUAGES.EN ? 'Dark theme' : 'Тёмная тема'}
        </button>
        <button
          className={s.switchThemeItem}
          onClick={() => switchTheme(THEMES.LIGHT)}
        >
          {lang === LANGUAGES.EN ? 'Light theme' : 'Светлая тема'}
        </button>
      </div>
      <div className={s.switchLangBlock}>
        <h3>{lang === LANGUAGES.EN ? 'Choose language' : 'Выберите язык'}</h3>
        <button
          className={s.switchLangButton}
          onClick={() => switchLang(LANGUAGES.RU)}
        >
          Русский
        </button>
        <button
          className={s.switchLangButton}
          onClick={() => switchLang(LANGUAGES.EN)}
        >
          English
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    theme: state.settings.theme,
    lang: state.settings.lang,
  }
}

export default connect(mapStateToProps, {
  switchLang,
  switchTheme,
})(Settings)
