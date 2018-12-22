
/*注册路由,暴露出去的是一个数组*/
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
