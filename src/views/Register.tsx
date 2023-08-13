import { FC } from 'react';
import { Typography, Button, Space, Form, Input, Spin } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_PATHNAME } from '../router';
import { userRegister } from '../api/user';
import { useRequest } from 'ahooks';
import styles from './Register.module.scss';
const { Title } = Typography;
type FieldType = {
  username?: string;
  password?: string;
  comfirm?: string;
  remember?: string;
};

const Register: FC = () => {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    userRegisterFn(values);
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const { loading, run: userRegisterFn } = useRequest(
    async info => {
      if (loading) return;
      const data = await userRegister(info);
      return data;
    },
    {
      manual: true,
      onSuccess() {
        alert('注册成功');
        nav(LOGIN_PATHNAME);
      },
    },
  );
  return (
    <div className={styles.content}>
      <Space className={styles.title}>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        &nbsp;
        <Title level={2}>新用户注册</Title>
      </Space>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名!' },
            { type: 'string', min: 2, max: 10, message: '字符长度在2-10之间' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名仅支持数字字母和下划线' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码!' },
            { type: 'string', min: 5, max: 18, message: '密码长度在5-18之间' },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="确认密码"
          name="comfirm"
          rules={[
            { required: true, message: '请输入密码!' },
            // 学习↓
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error('两次密码不一致'));
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 17 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATHNAME}>已有账户，请登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
