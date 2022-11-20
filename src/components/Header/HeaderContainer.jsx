import { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import PopupLoading from '../PopupLoading/PopupLoading'
import { checkIfAuthorised, handleLogOut } from '../../redux/authReducer'

function HeaderContainer(props) {
  const { auth, checkIfAuthorised, handleLogOut, lang } = props

  const navigate = useNavigate()

  const profileRedirect = () => {
    navigate('/profile')
  }
  const loginRedirect = () => {
    navigate('/login')
  }

  useEffect(() => {
    checkIfAuthorised(profileRedirect, loginRedirect)
  }, [auth.isLogged])

  if (auth.isLoading) {
    return <PopupLoading lang={lang} />
  } else {
    return (
      <Header
        auth={auth}
        onLogOut={() => handleLogOut(loginRedirect)}
        lang={props.lang}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    lang: state.settings.lang,
  }
}

export default connect(mapStateToProps, {
  checkIfAuthorised,
  handleLogOut,
})(HeaderContainer)
