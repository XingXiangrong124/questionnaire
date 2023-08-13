import { FC, useEffect, useState } from 'react';
import { Typography, Button, Space, Form, Checkbox, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../api/user';
import { useRequest } from 'ahooks';
import { REGISTER_PATHNAME, LIST_PATHNAME } from '../router';
import { setToken } from '../utils/token/user-token';
import styles from './Login.module.scss';
const { Title } = Typography;
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const USERNAME = 'username';
const PASSWORD = 'password';
const REMEMBER = 'remember';
const Login: FC = () => {
  const nav = useNavigate();
  const [rememberMe] = useState(localStorage.getItem(REMEMBER) === 'true');
  const [form] = Form.useForm();
  const { loading, run: userLoginFn } = useRequest(
    async info => {
      if (loading) return;
      const data = await userLogin(info);
      return data;
    },
    {
      manual: true,
      onSuccess(result: any) {
        const { token = '' } = result;
        nav(LIST_PATHNAME);
        setToken(token);
      },
    },
  );
  const onFinish = (values: any) => {
    const { username, password, remember } = values || {};
    if (remember) {
      console.log(remember);

      localStorage.setItem(REMEMBER, remember);
      localStorage.setItem(USERNAME, username);
      localStorage.setItem(PASSWORD, password);
    } else {
      localStorage.removeItem(USERNAME);
      localStorage.removeItem(PASSWORD);
      localStorage.removeItem(REMEMBER);
    }
    userLoginFn(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const getUserInfo = () => {
    return {
      [USERNAME]: localStorage.getItem(USERNAME),
      [PASSWORD]: localStorage.getItem(PASSWORD),
    };
  };
  useEffect(() => {
    const { username, password } = getUserInfo();
    form.setFieldsValue({ username, password });
  }, []);
  return (
    <div className={styles.content}>
      <Space className={styles.title}>
        <Title level={2}>
          <UserOutlined />
        </Title>
        &nbsp;
        <Title level={2}>用户登录</Title>
      </Space>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: rememberMe }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名!' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名仅支持数字字母和下划线' },
            { type: 'string', min: 1, max: 10, message: '超出用户名长度限制' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATHNAME}>新用户注册</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
