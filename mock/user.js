
const tokens = {
  '15605995727': {
    token: 'admin-token'
  },
  '13666002467': {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
const foodlist = {
  'type_jx': {
    introduction: 'I am a super administrator',
    name: 'Super Admin',
    list:[
      {
        url: 'https://res1.hoto.cn/02fe08e059633f0df444eb88.jpg!w580',
        title: '麻辣鸡腿香锅',
        dianz: '500'
      },
      {
        url: 'https://res1.hoto.cn/02fa750159633f0df444eb88.jpg!default',
        title: '鲜虾什锦豆腐',
        dianz: '428'
      },
      {
        url: 'https://res1.hoto.cn/03093a0b59633f0df444eb88.jpg!w580',
        title: '土豆粉蒸肉',
        dianz: '428'
      },
      {
        url: 'https://res1.hoto.cn/02fb443a59633f0df444eb88.jpg!default',
        title: '回锅排骨',
        dianz: '438'
      },
      {
        url: 'https://res1.hoto.cn/02fab2db59633f0df444eb88.jpg!default',
        title: '自制椰奶芋圆',
        dianz: '528'
      },
      {
        url: 'https://res1.hoto.cn/02fb2a7a59633f0df444eb88.jpg!default',
        title: '清口小炒',
        dianz: '728'
      },
      {
        url: 'https://res1.hoto.cn/030a0baa59633f0df444eb88.jpg!default',
        title: '茄汁大虾',
        dianz: '124'
      },
      {
        url: 'https://res1.hoto.cn/02f6cf8a59633f0df444eb88.jpg!default',
        title: '宫保鸡丁',
        dianz: '8003'
      }
    ]
  },
  'type_zc': {
    introduction: 'I am an editor',
    name: '哈哈哈哈'
  },
  'type_bns': {
    introduction: 'I am an editor',
    name: 'Normal Editor'
  },
  'type_jcc': {
    introduction: 'I am an editor',
    name: 'Normal Editor'
  },
  'type_sfc': {
    introduction: 'I am an editor',
    name: 'Normal Editor'
  }
}
export default [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '账号或者密码不正确。'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  // 获取菜谱
  {
    url: '/vue-admin-template/food/list\.*',
    type: 'get',
    response: config => {
      const { foodtype } = config.query
      const food = foodlist[foodtype]
      if (!food) {
        return {
          code: 50008,
          message: '参数错误'
        }
      }
      return {
        code: 20000,
        data: food
      }
    }
  }
]
