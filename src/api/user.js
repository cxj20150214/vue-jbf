import request from '@/utils/request'

export function getUserList(query) {
  return request({
    url: '/api/user/list',
    method: 'get',
    params: query
  })
}

export function postUser(data) {
  return request({
    url: '/api/user/save',
    method: 'post',
    data
  })
}
