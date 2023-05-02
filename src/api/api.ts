import axios, { AxiosRequestConfig } from 'axios'
import { ProfileType } from '../models/models'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'
const API_KEY = '06fa1e34-2eda-4911-ba6d-106750cf7c2d'

const axiosReq = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
})
const usersApi = {
  getUsers(isOnlyFriendsShown = false, page = 1, search = '') {
    return axiosReq.get(
      `users?page=${page}${isOnlyFriendsShown ? `&friend=true` : ''}${
        search.length > 0 ? `&term=${search}` : ''
      }`
    )
  },

  followUser(id: number) {
    return axiosReq.post(`follow/${id}`)
  },

  unfollowUser(id: number) {
    return axiosReq.delete(`follow/${id}`)
  },
}

const authApi = {
  login(values: {login: string, email:string}) {
    return axiosReq.post(BASE_URL + 'auth/login', values)
  },
  logout() {
    return axiosReq.delete(BASE_URL + 'auth/login')
  },
  checkAuth() {
    return axiosReq.get(BASE_URL + 'auth/me')
  },
}

const profileApi = {
  getUserData(userId: number) {
    return axiosReq.get(BASE_URL + 'profile/' + userId)
  },
  getUserStatus(userId: number) {
    return axiosReq.get(BASE_URL + 'profile/status/' + userId)
  },
  updateMyStatus(statusText: string) {
    return axiosReq.put(BASE_URL + 'profile/status', { status: statusText })
  },
  updateMyProfile(profileData: AxiosRequestConfig<{}>) {
    return axiosReq.put(BASE_URL + 'profile', {}, profileData)
  },
}

export { usersApi, authApi, profileApi }
