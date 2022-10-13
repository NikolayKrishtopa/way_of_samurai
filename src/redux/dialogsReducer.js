const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'
const CHOOSE_USER = 'CHOOSE-USER'

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Алёна',
      messages: ['Привет!', 'Как поживаешь?', 'Когда домой?', 'Я скучаю'],
    },
    {
      id: 2,
      name: 'Миша',
      messages: [
        'Привет!',
        'Пойдем бухнём?',
        'Съедим кебаб?',
        'Найти разливайку',
      ],
    },
    {
      id: 3,
      name: 'Эля',
      messages: ['Привет!', 'Миша с тобой?', 'У него телефон выключен'],
    },
    {
      id: 4,
      name: 'Вика',
      messages: [
        'Привет, папа!',
        'А Максим меня укусил!',
        'Давай поиграем в волка',
      ],
    },
    {
      id: 5,
      name: 'Макс',
      messages: ['Привет, папа!', 'Ам ам', 'Трактор', 'Банан'],
    },
    { id: 6, name: 'Женя', messages: ['Привет, дядя Коля!', 'Кошка'] },
    { id: 7, name: 'Сережа', messages: ['Привет, дядя Коля!', 'Пиво'] },
    { id: 8, name: 'Мама', messages: ['Привет, сынок!'] },
  ],
  chosenUserId: 1,
  newMessageText: '',
}

export default function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      state.dialogs
        .find((e) => e.id === state.chosenUserId)
        .messages.push(state.newMessageText)
      state.newMessageText = ''
      return state
    case CHANGE_MESSAGE_TEXT:
      state.newMessageText = action.messageText
      return state
    case CHOOSE_USER:
      state.chosenUserId = action.id
      return state
    default:
      return state
  }
}
