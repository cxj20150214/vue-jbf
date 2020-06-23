import request from '@/utils/request'

export function getactivityList(query) {
  return request({
    url: '/api/activity/list',
    method: 'get',
    params: query
  })
}
export function getAdminList(query) {
  return request({
    url: '/api/admin/list',
    method: 'get',
    params: query
  })
}
export function postactivity(data) {
  return request({
    url: '/api/activity/save',
    method: 'post',
    data
  })
}

export function getRegion() {
  return request({
    url: '/api/region/select_list',
    method: 'get',
    params: {
      type: 'district'
    }
  })
}
export function deleteactivity(data) {
  return request({
    url: '/api/activity/delete',
    method: 'delete',
    data
  })
}
// 获取订单列表
export function getOrderList(query) {
  return request({
    url: '/api/activity/order/list',
    method: 'get',
    params: query
  })
}
// 编辑订单信息
export function postactivityOrder(data) {
  return request({
    url: '/api/activity/order/save',
    method: 'post',
    data
  })
}
// 获取订单交易类型
export function getPaytype() {
  return request({
    url: '/api/parameter/item',
    method: 'get',
    params: {
      pid: 'PAY_TYPE'
    }
  })
}
// 删除订单
export function deleteOrder(data) {
  return request({
    url: '/api/activity/order/delete',
    method: 'delete',
    data
  })
}
// 管理员列表
export function getAdminerList(query) {
  return request({
    url: '/api/activity/admin/list',
    method: 'get',
    params: query
  })
}

// 管理员新增
export function Adminadd(data) {
  return request({
    url: '/api/activity/admin/add_user',
    method: 'post',
    data
  })
}
// 修改管理员状态
export function AdminSave(data) {
  return request({
    url: '/api/activity/admin/save',
    method: 'post',
    data
  })
}
// 删除管理员记录
export function deleteadminer(data) {
  return request({
    url: '/api/activity/admin/delete',
    method: 'delete',
    data
  })
}
// 客户签到列表
export function getOrderListSign(query) {
  return request({
    url: '/api/activity/sign/list',
    method: 'get',
    params: query
  })
}
// 回访列表
export function getOrderListReview(query) {
  return request({
    url: '/api/activity/review/list',
    method: 'get',
    params: query
  })
}
// 获取活动品牌列表
export function getBrandList(query) {
  return request({
    url: '/api/activity/activitybrand/list',
    method: 'get',
    params: query
  })
}
// 添加活动品牌
export function Brandadd(data) {
  return request({
    url: '/api/activity/activitybrand/add',
    method: 'post',
    data
  })
}
// 编辑活动品牌
export function Brandsave(data) {
  return request({
    url: '/api/activity/activitybrand/save',
    method: 'post',
    data
  })
}
// 删除活动品牌
export function deleteActivebrand(data) {
  return request({
    url: '/api/activity/activitybrand/delete',
    method: 'delete',
    data
  })
}
// 获取活动需求列表
export function getDemandList(query) {
  return request({
    url: '/api/activity/demand/list',
    method: 'get',
    params: query
  })
}

// 添加活动需求
export function Demandadd(data) {
  return request({
    url: '/api/activity/demand/add',
    method: 'post',
    data
  })
}
// 删除活动需求
export function deleteDemand(data) {
  return request({
    url: '/api/activity/demand/delete',
    method: 'delete',
    data
  })
}

// 盖章列表 
export function getStampList(query) {
  return request({
    url: '/api/activity/stamp/list',
    method: 'get',
    params: query
  })
}
// 客户列表 
export function getCustomerList(query) {
  return request({
    url: '/api/activity/customer/list',
    method: 'get',
    params: query
  })
}
// 编辑客户
export function Customersave(data) {
  return request({
    url: '/api/activity/customer/save',
    method: 'post',
    data
  })
}
// 编辑盖章信息
export function Stampsave(data) {
  return request({
    url: '/api/activity/stamp/save',
    method: 'post',
    data
  })
}
// 获取客户
export function getCusttype() {
  return request({
    url: '/api/parameter/item',
    method: 'get',
    params: {
      pid: ' SOURCE'
    }
  })
}
// 删除客户记录
export function deleteCustomer(data) {
  return request({
    url: '/api/activity/customer/delete',
    method: 'delete',
    data
  })
}
// 删除盖章
export function deleteStamp(data) {
  return request({
    url: '/api/activity/stamp/delete',
    method: 'delete',
    data
  })
}
// 门店列表
export function getShopid(query) {
  return request({
    url: '/api/store/list',
    method: 'get',
    params: query
  })
}
// 管理员编辑
export function Adminsave(data) {
  return request({
    url: '/api/activity/admin/save_user',
    method: 'post',
    data
  })
}
// 管理员新增
export function Orderadd(data) {
  return request({
    url: '/api/activity/order/add',
    method: 'post',
    data
  })
}
// 客户经理列表
export function getCustomerjl(query) {
  return request({
    url: '/api/activity/order/brand_user',
    method: 'get',
    params: query
  })
}
// 客户新增
export function Customeradd(data) {
  return request({
    url: '/api/activity/customer/add',
    method: 'post',
    data
  })
}
export function Reviewadd(data) {
  return request({
    url: '/api/activity/review/save',
    method: 'post',
    data
  })
}

// 回访列表编辑
export function Reviewsave(data) {
  return request({
    url: '/api/activity/review/save',
    method: 'post',
    data
  })
}
// 删除回访
export function deleteReview(data) {
  return request({
    url: '/api/activity/review/delete',
    method: 'delete',
    data
  })
}
// 盖章新增
export function Stampadd(data) {
  return request({
    url: '/api/activity/stamp/save',
    method: 'post',
    data
  })
}

// 定单中客户列表
export function getCustomerId(query) {
  return request({
    url: '/api/activity/order/customer_list',
    method: 'get',
    params: query
  })
}
// 搜索门店
export function getmdlist(query) {
  return request({
    url: '/api/activity/store_search_list',
    method: 'get',
    params: query
  })
}
// 导出管理员列表
export function adminExport(query) {
  return request({
    url: '/api/activity/admin/export',
    method: 'get',
    params: query
  })
}
// 导出定单列表
export function orderExport(query) {
  return request({
    url: '/api/activity/order/export',
    method: 'get',
    params: query
  })
}
// 导出客户列表
export function customerExport(query) {
  return request({
    url: '/api/activity/customer/export',
    method: 'get',
    params: query
  })
}
// 导出客户签到列表
export function orderlistSignExport(query) {
  return request({
    url: '/api/activity/sign/export',
    method: 'get',
    params: query
  })
}
// 导出回访列表
export function orderlistReviewExport(query) {
  return request({
    url: '/api/activity/review/export',
    method: 'get',
    params: query
  })
}
// 导出品牌列表
export function brandlistExport(query) {
  return request({
    url: '/api/activity/admin/export',
    method: 'get',
    params: query
  })
}
// 导出需求列表
export function DemandlistExport(query) {
  return request({
    url: '/api/activity/admin/export',
    method: 'get',
    params: query
  })
}
// 导出盖章信息
export function StamplistExport(query) {
  return request({
    url: '/api/activity/stamp/export',
    method: 'get',
    params: query
  })
}
// 获取门店品牌列表
export function search_store_brand(query) {
  return request({
    url: '/api/activity/activitybrand/search_store_brand',
    method: 'get',
    params: query
  })
}
// 统计各个列表
export function sta1(query) {
  return request({
    url: '/api/statistic/sale_card',
    method: 'get',
    params: query
  })
}
export function sta2(query) {
  return request({
    url: '/api/statistic/order_statistis',
    method: 'get',
    params: query
  })
}
export function sta3(query) {
  return request({
    url: '/api/statistic/day_data',
    method: 'get',
    params: query
  })
}
export function sta4(query) {
  return request({
    url: '/api/statistic/new_day_data',
    method: 'get',
    params: query
  })
}
export function sta5(query) {
  return request({
    url: '/api/statistic/stamp_data',
    method: 'get',
    params: query
  })
}
export function sta6(query) {
  return request({
    url: '/api/statistic/contribution_data',
    method: 'get',
    params: query
  })
}
export function sta7(query) {
  return request({
    url: '/api/statistic/union_buy_data',
    method: 'get',
    params: query
  })
}
export function sta8(query) {
  return request({
    url: '/api/statistic/activity_data',
    method: 'get',
    params: query
  })
}
export function sta9(query) {
  return request({
    url: '/api/statistic/new_union_buy',
    method: 'get',
    params: query
  })
}
export function sta10(query) {
  return request({
    url: '/api/statistic/new_from_order',
    method: 'get',
    params: query
  })
}
export function sta11(query) {
  return request({
    url: '/api/statistic/customer_stamp',
    method: 'get',
    params: query
  })
}
export function sta12(query) {
  return request({
    url: '/api/statistic/user_data',
    method: 'get',
    params: query
  })
}
export function sta13(query) {
  return request({
    url: '/api/statistic/customer_sign',
    method: 'get',
    params: query
  })
}
// 更新活动品牌排序
export function saveSort(data) {
  return request({
    url: '/api/activity/activitybrand/save_sort',
    method: 'post',
    data
  })
}