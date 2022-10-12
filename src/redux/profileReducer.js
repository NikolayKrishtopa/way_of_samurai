const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

export default function profileReducer(state, action) {
  switch (action.type) {
    case ADD_POST:
      state.posts.unshift({
        text: state.newPostText,
        id: state.posts.length + 1,
        likes: 0,
      })
      state.newPostText = ''
      return state

    case CHANGE_POST_TEXT:
      state.newPostText = action.postText
      return state
    default:
      return state
  }
}
