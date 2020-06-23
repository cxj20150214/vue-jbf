import request from '@/utils/request'

export function createCode(query) {
  return request({
    url: '/api/sys/code/create',
    method: 'get',
    params: query
  })
}

export function deleteCode(data) {
  return request({
    url: '/api/sys/code/delete',
    method: 'delete',
    data
  })
}

export function codeList(query) {
  return request({
    url: '/api/sys/code/list',
    method: 'get',
    params: query

  })
}
