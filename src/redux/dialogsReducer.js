const SEND_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'
const SWITCH_COMPANION = 'SWITCH-COMPANION'

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
  chosenCompanionId: 1,
  newMessageText: '',
}

export default function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const stateCopy = { ...state }
      stateCopy.dialogs = [ ...state.dialogs ]
      stateCopy.dialogs.map((e,i)=>{return {...state.dialogs[i]}})
      stateCopy.dialogs.find((e) => e.id === stateCopy.chosenCompanionId)
        .messages.push(stateCopy.newMessageText)
      stateCopy.newMessageText = ''
      return stateCopy}
    case CHANGE_MESSAGE_TEXT: {
      const stateCopy = { ...state }
      stateCopy.newMessageText = action.messageText
      return stateCopy
      }
    case SWITCH_COMPANION: {
      const stateCopy = { ...state }
      stateCopy.chosenCompanionId = action.id
      return stateCopy}
    default:
      return state
  }
}
