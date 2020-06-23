/**
 * 会员管理
 */
import Layout from '@/layout'

const UserRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noRedirect',
  name: 'User',
  meta: { title: '会员管理', icon: 'user' },
  children: [
    {
      path: 'list',
      name: 'UserList',
      component: () => import('@/views/user/list'),
      meta: { title: '会员列表', icon: 'user', auth: true }
    }
  ]
}
export default UserRouter
