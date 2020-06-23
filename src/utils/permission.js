import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const menus = store.getters && store.getters.menus
    const permissionRoles = value

    let hasPermission = false
    if (store.getters.system === '1') {
      hasPermission = true
    } else {
      hasPermission = menus.some(menu => {
        return permissionRoles.includes(menu)
      })
    }

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
