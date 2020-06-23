import request from '@/utils/request'

export function createVersion(data) {
  return request({
    url: '/api/sys/version/create',
    method: 'post',
    data
  })
}

export function deleteVersion(data) {
  return request({
    url: '/api/sys/version/delete',
    method: 'delete',
    data
  })
}

export function versionList(query) {
  return request({
    url: '/api/sys/version/list',
    method: 'get',
    params: query

  })
}
