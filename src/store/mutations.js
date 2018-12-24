//包含n个直接修改状态的方法的对象
import
{
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER, RESET_USER
} from './mutation-types'
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
  },
  [RECEIVE_USER](state,{user}){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  }
}
