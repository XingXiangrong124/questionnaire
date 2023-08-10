import { FC } from 'react';
import { Typography, Button, Space, Form, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '../router';
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
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
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
          rules={[{ required: true, message: '请输入密码!' }]}
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
