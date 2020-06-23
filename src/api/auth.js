import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
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

/**
 *  修改个人资料
 */
export function postProfile(data) {
  return request({
    url: '/api/auth/profile',
    method: 'post',
    data
  })
}

/**
 *  修改密码
 */
export function postPassword(data) {
  return request({
    url: '/api/auth/password',
    method: 'post',
    data
  })
}
