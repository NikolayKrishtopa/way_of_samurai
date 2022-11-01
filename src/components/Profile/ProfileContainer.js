import Profile from './Profile'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute'

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
    isLogged: state.auth.isLogged,
  }
}

const ProfileContainer = connect(mapStateToProps, {
  onAddPost: actionCreators.addPost,
  onPostTextChange: actionCreators.changePostText,
})(ProtectedRoute(Profile))

export default ProfileContainer
