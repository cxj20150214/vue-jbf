import request from '@/utils/request'

export function getTagList(query) {
  return request({
    url: '/api/cms/tag/list',
    method: 'get',
    params: query
  })
}

export function deleteTag(data) {
  return request({
    url: '/api/cms/tag/delete',
    method: 'delete',
    data
  })
}

export function postTag(data) {
  return request({
    url: '/api/cms/tag/save',
    method: 'post',
    data
  })
}

export function getAbout() {
  return request({
    url: '/api/cms/about/get',
    method: 'get'
  })
}

export function postAbout(data) {
  return request({
    url: '/api/cms/about/save',
    method: 'post',
    data
  })
}

export function getHelpsList(query) {
  return request({
    url: '/api/cms/help/list',
    method: 'get',
    params: query
  })
}

export function getHelps(query) {
  return request({
    url: '/api/cms/help/info',
    method: 'get',
    params: query
  })
}

export function postHelps(data) {
  return request({
    url: '/api/cms/help/save',
    method: 'post',
    data
  })
}
