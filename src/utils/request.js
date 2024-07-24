// 二次封装axios
import axios from 'axios'
import { getToken } from './token'
import { ElMessage  } from 'element-plus'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

// 错误处理函数,在响应拦截器中使用
const errorHandle = (status, other) => {
  switch (status) {
      case 403:
        ElMessage({message:'登录过期，请重新登录',type:'error'});
          // 清除token
          setTimeout(() => {
          }, 1000);
          break;
      case 404:
        ElMessage({message:'网络请求不存在',type:'error'});
          break;
      default:
        ElMessage({message:other});
  }
}

// 请求拦截器
request.interceptors.request.use(config => {
  // 在发送前获取并设置token
  config.headers['Authorization'] = getToken('token')
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
  if(res.status == 200 || res.status===201 ) {
    return Promise.resolve(res)
  } else {
    ElMessage({type: 'warning', message: res.data.msg || 'error'})
  }
}, error => {
  const { response } = error;
  if (response) {
    // 请求已发出，但是不在200的范围，调用统一错误处理方法
    errorHandle(response.status, response.data.msg);
    return Promise.reject(response);
  } else {
    ElMessage({message:'网络异常',type:'error'})
  }

})

export default request