const store = {
  _state: {
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
    profile: {
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
    },
  },
  renderByState() {},
  getState() {
    return this._state
  },
  addPost() {
    this._state.profile.posts.unshift({
      text: this._state.profile.newPostText,
      id: this._state.profile.posts.length + 1,
      likes: 0,
    })
    this._state.profile.newPostText = ''
    this.renderByState()
  },
  handlePostTextChange(e) {
    this._state.profile.newPostText = e.target.value
    this.renderByState()
  },
  subscribe(observer) {
    this.renderByState = observer
  },
}

export default store
