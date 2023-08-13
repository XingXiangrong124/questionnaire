import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { message } from 'antd';
import { getToken } from '../token/user-token';
const instance: any = axios.create({
  timeout: 10 * 1000,
});
// 请求拦截器，每次请求之前都会加上token
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${getToken()}`; // JWT固定格式
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);
// 回复拦截器，统一处理错误消息
instance.interceptors.response.use((res: any) => {
  const resInfo: ResponseType = res.data || {};
  const { state, data, msg } = resInfo;
  if (state !== 0) {
    if (msg) {
      // 进行错误提示
      message.error(msg);
      console.log(msg);
    }
    return new Error(msg);
  }
  return data;
});
export default instance;
export type ResponseType = {
  state: number;
  data?: ResponseDataType;
  msg: string;
};

export type ResponseDataType = {
  [key: string]: any;
};
