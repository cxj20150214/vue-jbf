const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  avatar_url: state => state.user.avatar_url,
  realname: state => state.user.realname,
  mobile: state => state.user.mobile,
  username: state => state.user.username,
  role_id: state => state.user.role_id,
  system: state => state.user.system,
  menus: state => state.user.menus,
  permission_routes: state => state.permission.routes
}
export default getters
