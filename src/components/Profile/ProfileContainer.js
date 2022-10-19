import Profile from './Profile'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: () => dispatch(actionCreators.addPost()),
    onPostTextChange: text => dispatch(actionCreators.changePostText(text))
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer