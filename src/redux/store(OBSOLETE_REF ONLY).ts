// import profileReducer from './profileReducer.js';
// import dialogsReducer from './dialogsReducer.js';

// const ACTION_TYPES = {
//   ADD_POST: 'ADD-POST',
//   CHANGE_POST_TEXT: 'CHANGE-POST-TEXT',
//   SEND_MESSAGE: 'ADD-MESSAGE',
//   CHANGE_MESSAGE_TEXT: 'CHANGE-MESSAGE-TEXT',
//   CHOOSE_USER: 'CHOOSE-USER',
// };

// const actionCreators = {
//   addPost: () => ({ type: ACTION_TYPES.ADD_POST }),
//   changePostText: (text) => ({
//     type: ACTION_TYPES.CHANGE_POST_TEXT,
//     postText: text,
//   }),
//   sendMessage: () => ({ type: ACTION_TYPES.SEND_MESSAGE }),
//   changeMessageText: (text) => ({
//     type: ACTION_TYPES.CHANGE_MESSAGE_TEXT,
//     messageText: text,
//   }),
//   chooseUser: (id) => ({
//     type: ACTION_TYPES.CHOOSE_USER,
//     id: id,
//   }),
// };

// const store = {
//   _state: {
//     messagesPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: 'Алёна',
//           messages: ['Привет!', 'Как поживаешь?', 'Когда домой?', 'Я скучаю'],
//         },
//         {
//           id: 2,
//           name: 'Миша',
//           messages: [
//             'Привет!',
//             'Пойдем бухнём?',
//             'Съедим кебаб?',
//             'Найти разливайку',
//           ],
//         },
//         {
//           id: 3,
//           name: 'Эля',
//           messages: ['Привет!', 'Миша с тобой?', 'У него телефон выключен'],
//         },
//         {
//           id: 4,
//           name: 'Вика',
//           messages: [
//             'Привет, папа!',
//             'А Максим меня укусил!',
//             'Давай поиграем в волка',
//           ],
//         },
//         {
//           id: 5,
//           name: 'Макс',
//           messages: ['Привет, папа!', 'Ам ам', 'Трактор', 'Банан'],
//         },
//         { id: 6, name: 'Женя', messages: ['Привет, дядя Коля!', 'Кошка'] },
//         { id: 7, name: 'Сережа', messages: ['Привет, дядя Коля!', 'Пиво'] },
//         { id: 8, name: 'Мама', messages: ['Привет, сынок!'] },
//       ],
//       chosenUserId: 1,
//       newMessageText: '',
//     },
//     profilePage: {
//       posts: [
//         { id: 1, text: 'Привет! Мне скучно', likes: 1 },
//         { id: 2, text: 'Я пишу соцсеть', likes: 7 },
//         { id: 3, text: 'Но я слишком тупой', likes: 3 },
//         { id: 4, text: 'Что нового?', likes: 4 },
//         { id: 5, text: 'Кто последний из РФ, выключите свет!', likes: 6 },
//         { id: 6, text: 'Хочу хинкали', likes: 2 },
//         { id: 7, text: 'А может даже кебаб', likes: 1 },
//         { id: 8, text: 'В Грузии все вкусно', likes: 3 },
//       ],
//       newPostText: '',
//     },
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
//     this._callSubscriber();
//   },

//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
// };

// export default store;
// export { actionCreators };
