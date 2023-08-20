import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Space, message } from 'antd';
import { UserSwitchOutlined } from '@ant-design/icons';
import { LOGIN_PATHNAME } from '../router';
import { removeToken } from '../utils/token/user-token';
import useGetUserInfo from '../hooks/useGetUserInfo';
import { logoutReducer } from '../store/userReducer';
import { useDispatch } from 'react-redux';
const User: FC = () => {
  const { username } = useGetUserInfo();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = () => {
    removeToken();
    dispatch(logoutReducer()); // 清空redux userInfo数据
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
