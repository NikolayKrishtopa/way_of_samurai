import Profile from './Profile'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute'
import { compose } from 'redux'

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
    isLogged: state.auth.isLogged,
  }
}

export default compose(
  connect(mapStateToProps, {
    onAddPost: actionCreators.addPost,
    onPostTextChange: actionCreators.changePostText,
  }),
  ProtectedRoute
)(Profile)
