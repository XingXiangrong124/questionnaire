import { FC } from 'react';
import { Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, CheckOutlined } from '@ant-design/icons';
import styles from './EditHeader.module.scss';
const { Title } = Typography;
const EditHeader: FC = () => {
  const nav = useNavigate();
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} style={{ color: 'white' }} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.main}>中</div>
        <div className={styles.right}>
          <Space>
            <Button style={{ border: 'none' }} icon={<CheckOutlined />}>
              保存
            </Button>
            <Button type="primary" shape="round">
              发布
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default EditHeader;
