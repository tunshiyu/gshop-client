
/*执行异步函数，提交mutation*/

import {
  reqAddress,
  reqCategorys,
  reqShps,
  reqLogout,
  reqUserInfo
}
from '../api'
import
{RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
}from './mutation-types'

export default {
  async getAddress ({commit,state}) {
    const {longitude, latitude} = state
    const result= await reqAddress(latitude,longitude)
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys ({commit}) {
    const result= await reqCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops ({commit,state}) {
    const {longitude, latitude} = state
    const result= await reqShps(latitude,longitude)
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //actions如果参数从state传来在{}中写，如果是组件传过来，在{}外写如下
  async saveUser ({commit},user) {
    commit(RECEIVE_USER,{user})
  },
  //异步自动获取用户信息
  async getUser({commit}){
  //  发送请求
   const result = await reqUserInfo()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  //异步用户退出登录
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      //异步退出成功
      commit(RESET_USER)
    }
  }
}
