import request from '@/utils/request'

export function getParameterList(query) {
  return request({
    url: '/api/parameter/list',
    method: 'get',
    params: query
  })
}

export function deleteParameter(data) {
  return request({
    url: '/api/parameter/delete',
    method: 'delete',
    data
  })
}

export function postParameter(data) {
  return request({
    url: '/api/parameter/save',
    method: 'post',
    data
  })
}

export function getParameterItem(pid) {
  return request({
    url: '/api/parameter/item',
    method: 'get',
    params: {
      pid
    }
  })
}
