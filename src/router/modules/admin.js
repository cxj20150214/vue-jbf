/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const adminRouter = {
  path: '/admin',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Admin',
  meta: {
    title: '管理员管理',
    icon: 'admin'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/admin/list'),
      name: 'AdminList',
      meta: { title: '管理员列表', icon: 'form', auth: true }
    },
    {
      path: 'role',
      component: () => import('@/views/admin/role'),
      name: 'AdminRoleList',
      meta: { title: '角色列表', icon: 'form', auth: true }
    }
  ]
}
export default adminRouter
