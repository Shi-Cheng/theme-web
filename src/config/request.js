/**
 *  全局统一的请求接口
 * @author zhangmingyang
 * @Date: 2019/8/16
 * @company Dingxuan
 */

import axios from 'axios'
import config from './config'
import { Message } from 'element-ui'
// import { Message } from 'element-ui'
import { getToken, getUser } from '../utils/auth'
const LOGIN_API = 'login'
let userInfo = null
let token = null

const baseUrl = process.env.NODE_ENV === 'production' ? config.baseUrl.pro : config.baseUrl.dev
const service = axios.create({
  baseURL: baseUrl, // api 的 base_url
  withCredentials: true,
  headers: {
    'Cache-control': 'no-cache',
    'Content-type': 'application/json;charset=utf-8'
  }
})
function init() {
  userInfo = getUser()
  if (userInfo) {
    userInfo = JSON.parse(userInfo)
  } else {
    userInfo = null
  }
  token = getToken()
}

// request 拦截器
service.interceptors.request.use(config => {
  init()
  if (userInfo && token) {
    config.headers.common['phoneNumber'] = userInfo.phoneNumber || ''
    config.headers.common['token'] = token || ''
  }
  for (const i in config.params) {
    if (config.params[i] === 'undefined' || config.params[i] === null || config.params[i] === 'null') {
      config.params[i] = ''
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    const responseURL = response.request.responseURL
    if (responseURL && responseURL.toString().indexOf(LOGIN_API) > 0) {
      return res
    }
    // 判断此时是否为加密接口
    if (typeof (res.success) === 'undefined') {
      return res
    } else if (res.success) {
      return res
    } else {
      Message.error(res.message)
      return Promise.reject(res.message)
    }
  },
  error => {
    Message.error(config.apiErrorMsg)
    return Promise.reject(error)
  }
)
service.baseURL = baseUrl
export default service
