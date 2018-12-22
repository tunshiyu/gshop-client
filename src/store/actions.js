
/*执行异步函数，提交mutation*/

import {
  reqAddress,
  reqCategorys,
  reqShps
}
from '../api'
import
{RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
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
}
