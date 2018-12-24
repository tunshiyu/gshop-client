/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'
const BASE = '/api'  // 开发环境下需要使用代理帮我们转发请求

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${longitude},${latitude}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASE+'/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShps = (longitude, latitude) => ajax(BASE+`/shops`,{longitude, latitude})
//[7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE+`/sendcode`,{phone})
//## 6、用户名密码登陆 http://localhost:5000/login_pwd POST
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE+`/login_pwd`,{name,pwd,captcha},'POST')
//## 8、手机号验证码登陆  http://localhost:5000/login_sms  POST
//  |参数		     |是否必选 |类型     |说明
// 	|phone       |Y       |string   |手机号
// 	|code        |Y       |string   |验证码
export const  reqSmsLogin = (phone,code) => ajax(BASE+'/login_sms',{phone,code},'POST')

// ### 10、用户登出 http://localhost:5000/logout
export const reqLogout = () => ajax(BASE+'/logout')
//### 9、根据会话获取用户信息 http://localhost:5000/userinfo
export const reqUserInfo = () => ajax(BASE+ '/userinfo')
