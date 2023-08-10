import { FC, useEffect } from 'react';
import { Typography, Button, Space, Form, Checkbox, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { REGISTER_PATHNAME } from '../router';
import styles from './Login.module.scss';
const { Title } = Typography;
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const USERNAME = 'username';
const PASSWORD = 'password';
const Login: FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const { username, password, remember } = values || {};
    if (remember) {
      console.log(remember);
      localStorage.setItem(USERNAME, username);
      localStorage.setItem(PASSWORD, password);
    } else {
      localStorage.removeItem(USERNAME);
      localStorage.removeItem(PASSWORD);
    }
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
        initialValues={{ remember: false }}
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
