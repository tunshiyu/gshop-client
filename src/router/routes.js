
/*注册路由,暴露出去的是一个数组*/
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopFoods from '../pages/Shop/ShopFoods/ShopFoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

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
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/foods',
        component: ShopFoods
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '',
        redirect: '/shop/foods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
