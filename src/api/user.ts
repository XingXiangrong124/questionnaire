import request, { ResponseType } from '../utils/request/axios';
type UserInfo = {
  username: string;
  password: string;
};
/**
 * 注册
 */
export const userRegister = (info: UserInfo): Promise<ResponseType> => {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: info,
  });
};

/**
 * 登录
 */
export const userLogin = (info: UserInfo): Promise<ResponseType> => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: info,
  });
};

/**
 * 获取用户信息
 */
export const getUserInfo = (): Promise<ResponseType> => {
  return request({
    url: '/api/user/info',
    method: 'get',
  });
};
