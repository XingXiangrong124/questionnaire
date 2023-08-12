import axios from 'axios';
import { message } from 'antd';
const instance: any = axios.create({
  timeout: 10 * 1000,
});
// 拦截器，统一处理错误消息
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
