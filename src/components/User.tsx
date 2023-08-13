import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Space, message } from 'antd';
import { useRequest } from 'ahooks';
import { UserSwitchOutlined } from '@ant-design/icons';
import { getUserInfo } from '../api/user';
import { LOGIN_PATHNAME } from '../router';
import { removeToken } from '../utils/token/user-token';
const User: FC = () => {
  const nav = useNavigate();
  const { data } = useRequest(getUserInfo);
  const { username } = (data as any) || '';
  const logout = () => {
    removeToken();
    message.success('退出成功');
    nav(LOGIN_PATHNAME);
  };
  const UserInfo = () => {
    return (
      <>
        <div>
          <Space style={{ color: 'white', fontWeight: 'bold' }}>
            <UserSwitchOutlined />
            <span>{username}</span>
          </Space>
          <Button type="link" onClick={logout}>
            登出
          </Button>
        </div>
      </>
    );
  };
  const Login = () => {
    return <Link to={LOGIN_PATHNAME}>登录</Link>;
  };
  return <>{username ? <UserInfo /> : <Login />}</>;
};
export default User;
