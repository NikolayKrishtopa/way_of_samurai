import {ACTION_TYPES} from '../utils/action-creators'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   name: 'Алёна',
    //   status: 'Я устала хочу любви',
    //   isFollowed: true,
    //   location: {
    //     country: 'Russia',
    //     city: 'Ramenskoe'
    //   }
    // },
    // {
    //   id: 2,
    //   name: 'Миша',
    //   status: 'Хоп-хоп',
    //   isFollowed: true,
    //   location: {
    //     country: 'Georgia',
    //     city: 'Kutaisi'
    //   }
    // },
    // {
    //   id: 3,
    //   name: 'Вика',
    //   status: 'Папина дочка',
    //   isFollowed: false,
    //   location: {
    //     country: 'Russia',
    //     city: 'Ramenskoe'
    //   }
    // },
    // {
    //   id: 4,
    //   name: 'Макс',
    //   status: 'Все заебали',
    //   isFollowed: false,
    //   location: {
    //     country: 'Russia',
    //     city: 'Ramenskoe'
    //   }
    // },
    // {
    //   id: 5,
    //   name: 'Эля',
    //   status: 'Он показал писюн',
    //   isFollowed: false,
    //   location: {
    //     country: 'Russia',
    //     city: 'Котельники'
    //   }
    // },
    // {
    //   id: 6,
    //   name: 'Женя',
    //   status: 'Папа любит пиво',
    //   isFollowed: false,
    //   location: {
    //     country: 'Russia',
    //     city: 'Котельники'
    //   }
    // },
    // {
    //   id: 7,
    //   name: 'Сережа',
    //   status: 'Папа любит пиво',
    //   isFollowed: false,
    //   location: {
    //     country: 'Russia',
    //     city: 'Котельники'
    //   }
    // },
    // {
    //   id: 8,
    //   name: 'Борис',
    //   status: 'животное',
    //   isFollowed: false,
    //   location: {
    //     country: 'США',
    //     city: 'Нью-Йорк'
    //   }
    // },
    // {
    //   id: 9,
    //   name: 'Жан Буридан',
    //   status: 'философ',
    //   isFollowed: false,
    //   location: {
    //     country: 'N/A',
    //     city: 'N/A'
    //   }
    // }
  ],
  usersShownPerPage: 10,
  page: 1,
  showOnlyFriends: false,
  searchUserTextValue: '',
  userSearch: ''
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_USERS: {
      const stateCopy = { ...state, users: [...action.users] }
      return stateCopy
    }
    case ACTION_TYPES.FOLLOW_USER: {
      const stateCopy = { ...state, users: [...state.users].filter(e=>e.id===action.id?{...e}:e) }
      stateCopy.users.find(e=>e.id===action.id).isFollowed = !stateCopy.users.find(e=>e.id===action.id).isFollowed 
      return stateCopy
    }
    case ACTION_TYPES.EXTEND_USERS_LIST: {
      const stateCopy = { ...state }
      stateCopy.page += 1
      return stateCopy
    }
    case ACTION_TYPES.SHOW_ALL_USERS: {
      const stateCopy = { ...state }
      stateCopy.showOnlyFriends = false
      return stateCopy
    }
    case ACTION_TYPES.SHOW_ONLY_FRIENDS: {
      const stateCopy = { ...state }
      stateCopy.showOnlyFriends = true
      return stateCopy
    }
    case ACTION_TYPES.CHANGE_USER_SEARCH_TEXT: {
      const stateCopy = { ...state }
      stateCopy.searchUserTextValue = action.text
      return stateCopy
    }
    case ACTION_TYPES.SUBMIT_USER_SEARCH: {
      const stateCopy = { ...state, userSearch: state.searchUserTextValue }
      return stateCopy
    }
    default:
      return state
  }
}
