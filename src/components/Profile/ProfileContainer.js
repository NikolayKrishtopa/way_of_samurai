import Profile from './Profile'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
  }
}

const ProfileContainer = connect(mapStateToProps, {
  onAddPost: actionCreators.addPost,
  onPostTextChange: actionCreators.changePostText,
})(Profile)

export default ProfileContainer
