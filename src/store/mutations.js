//包含n个直接修改状态的方法的对象
import
  {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
  }from './mutation-types'
export default {
  //由于对象属性是字符串，所以要加中括号让它变成变量
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  }
}
