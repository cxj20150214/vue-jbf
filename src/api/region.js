import request from '@/utils/request'

export function getRegionPlist(query) {
  return request({
    url: '/api/region/plist',
    method: 'get',
    params: query
  })
}

export function getRegionSearch(query) {
  return request({
    url: '/api/region/search',
    method: 'get',
    params: query
  })
}

