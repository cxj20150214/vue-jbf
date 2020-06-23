import { login, logout, getInfo } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  realname: '',
  mobile: '',
  username: '',
  avatar_url: '',
  system: '',
  menus: [],
  role_id: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.realname = name
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar_url = avatar
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  SET_SYSTEM: (state, system) => {
    state.system = system
  },
  SET_ROLE_ID: (state, role_id) => {
    state.role_id = role_id
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          const { data } = response
          var _token = data.token_type + ' ' + data.access_token
          commit('SET_TOKEN', _token)
          setToken(_token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response

          if (!data) {
            reject('验证失败，请重新登录.')
          }
          commit('SET_ROLE_ID', data.role_id)
          commit('SET_MENUS', data.menus)
          commit('SET_SYSTEM', data.system)
          commit('SET_NAME', data.realname)
          commit('SET_AVATAR', data.avatar_url)
          commit('SET_USERNAME', data.username)
          commit('SET_MOBILE', data.mobile)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLE_ID', '')
          commit('SET_MENUS', '')
          commit('SET_SYSTEM', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_USERNAME', '')
          commit('SET_MOBILE', '')
          removeToken()
          resetRouter()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLE_ID', '')
      commit('SET_MENUS', '')
      commit('SET_SYSTEM', '')
      commit('SET_NAME', '')
      commit('SET_AVATAR', '')
      commit('SET_USERNAME', '')
      commit('SET_MOBILE', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
