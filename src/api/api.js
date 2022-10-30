import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'
const API_KEY = '06fa1e34-2eda-4911-ba6d-106750cf7c2d'

const usersReq = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
})

const usersApi = {
  getUsers(showOnlyFriends = false, page = 1, search = '') {
    return usersReq.get(
      `users?page=${page}${showOnlyFriends ? `&friend=true` : ''}${
        search.length > 0 ? `&term=${search}` : ''
      }`
    )
  },

  followUser(id) {
    return usersReq.post(`follow/${id}`)
  },

  unfollowUser(id) {
    return usersReq.delete(`follow/${id}`)
  },
}

export { usersApi }
