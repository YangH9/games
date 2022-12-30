import axios from "axios"
import jsonp from "./jsonp"

axios.defaults.baseURL = "" // 设置axios默认地址

// 添加jsonp方法
axios.jsonp = jsonp

// 请求拦截器
axios.interceptors.request.use(
  config => {
    console.log("请求拦截器")
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    console.log("响应拦截器")
    return response
  },
  error => Promise.reject(error)
)

// axios.defaults.headers.post[ "Content-Type" ] = "application/json;charset=UTF-8"
// axios.defaults.headers.post[ "Content-Type" ] = "application/x-www-form-urlencoded;charset=UTF-8"

export default axios
