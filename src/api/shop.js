import request from '@/utils/request'

export function getShopList(query) {
  return request({
    url: '/api/store/list',
    method: 'get',
    params: query
  })
}

export function deleteShop(data) {
  return request({
    url: '/api/store/delete',
    method: 'delete',
    data
  })
}

export function postShop(data) {
  return request({
    url: '/api/store/save',
    method: 'post',
    data
  })
}

export function getStaffList(query) {
  return request({
    url: '/api/store/staff/list',
    method: 'get',
    params: query
  })
}

export function deleteStaff(data) {
  return request({
    url: '/api/store/staff/delete',
    method: 'delete',
    data
  })
}

export function postStaff(data) {
  return request({
    url: '/api/store/staff/save',
    method: 'post',
    data
  })
}

export function getPositionList(query) {
  return request({
    url: '/api/store/staff/jlist',
    method: 'get',
    params: query
  })
}

export function getDepartmentList(query) {
  return request({
    url: '/api/store/staff/dlist',
    method: 'get',
    params: query
  })
}
export function getaddress(query) {
  return request({
    url: '/api/region/select_list',
    method: 'get',
    params: query
  })
}
export function getDeJobList(query) {
  return request({
    url: '/api/store/staff/job_list',
    method: 'get',
    params: query
  })
}

