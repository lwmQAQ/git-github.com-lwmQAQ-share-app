// 创建 axios 实例
import axios from 'axios';

const testurl = 'http://10.61.145.84:8080';
const useurl = 'http://121.37.228.161:8080';
// 创建 axios 实例
const instance = axios.create({
  baseURL:  useurl, // 基础URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 响应数据处理，可以在这里统一处理返回的数据格式
    return response.data;
  },
  error => {
    // 响应错误处理，例如401未授权等
    if (error.response && error.response.status === 401) {
      // 可以进行重新登录或跳转到登录页等操作
      console.error('未授权，请重新登录');
    }
    return Promise.reject(error);
  }
);
// 封装 POST 请求
export function post(url, data = {}) {
  return instance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// 封装 GET 请求
export function get(url, params = {}) {
 
  return instance.get(url, { params },{
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


// 封装 PUT 请求
export function put(url, data = {}) {
  return instance.put(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// 封装 DELETE 请求
export function del(url, data = {}) {
  return instance.delete(url, { data });
}

// 封装表单数据上传
export function uploadForm(url, formData) {
  return instance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // 设置表单数据的内容类型
    },
  });
}

// 导出 axios 实例
export default instance;
