const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, text: 'Привет! Мне скучно', likes: 1 },
    { id: 2, text: 'Я пишу соцсеть', likes: 7 },
    { id: 3, text: 'Но я слишком тупой', likes: 3 },
    { id: 4, text: 'Что нового?', likes: 4 },
    { id: 5, text: 'Кто последний из РФ, выключите свет!', likes: 6 },
    { id: 6, text: 'Хочу хинкали', likes: 2 },
    { id: 7, text: 'А может даже кебаб', likes: 1 },
    { id: 8, text: 'В Грузии все вкусно', likes: 3 },
  ],
  newPostText: '',
}

export default function profileReducer(state = initialState, action) {
  const stateCopy = { ...state }
  switch (action.type) {
    case ADD_POST:
      stateCopy.posts = [...state.posts]
      stateCopy.posts.unshift({
        text: stateCopy.newPostText,
        id: stateCopy.posts.length + 1,
        likes: 0,
      })
      stateCopy.newPostText = ''
      return stateCopy

    case CHANGE_POST_TEXT:
      stateCopy.newPostText = action.postText
      return stateCopy
    default:
      return stateCopy
  }
}
