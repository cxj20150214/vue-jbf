import request from '@/utils/request'

export function getMenuList(query) {
  return request({
    url: '/api/menu/list',
    method: 'get',
    params: query
  })
}

export function getMenuPlist(query) {
  return request({
    url: '/api/menu/plist',
    method: 'get',
    params: query
  })
}

export function getMenutree(query) {
  return request({
    url: '/api/menu/tree',
    method: 'get',
    params: query
  })
}

export function deleteMenu(data) {
  return request({
    url: '/api/menu/delete',
    method: 'delete',
    data
  })
}

export function postMenu(data) {
  return request({
    url: '/api/menu/save',
    method: 'post',
    data
  })
}

