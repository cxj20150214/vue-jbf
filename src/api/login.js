import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/api/auth/info',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/auth/logout',
    method: 'get'
  })
}

export function postRefresh() {
  return request({
    url: '/api/auth/refresh',
    method: 'post'
  })
}
