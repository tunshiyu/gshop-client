/*
* 能发送ajax请求的函数模块
* 包装axios
* 函数的返回值是promise对象
*/
import axios from 'axios'
export default function ajax(url,data={},method='GET') {
  return new Promise(function (resolve,reject) {
    let promise = ''
    if(method === 'GET'){
      promise = axios.get(url,{params: data}) // params配置指定的是query参数
    }else if(method === 'POST'){
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(errow => {
        alert(errow.message)
      })
  })
}
