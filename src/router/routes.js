
/*注册路由,暴露出去的是一个数组*/
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'


export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
