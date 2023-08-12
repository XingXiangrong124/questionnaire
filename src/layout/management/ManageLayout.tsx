import { FC, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './ManageLayout.module.scss';
import { PlusCircleOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Divider } from 'antd';
import { createQuestionItem } from '../../api/question';
import { LIST_PATHNAME, STAR_PATHNAME, RUBBISH_PATHNAME } from '../../router';
const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  function handleCreate() {
    // 当问卷正在创建中，按钮点击一律返回（防止创建新问卷）
    if (loading) return;
    setLoading(true);
    createQuestionItem().then((res: any) => {
      const data = res;
      const { id } = data || {};
      if (id) {
        nav(`/questionnaire/edit/${id}`);
      }
      setLoading(false);
    });
  }
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusCircleOutlined />} onClick={handleCreate}>
            创建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith(LIST_PATHNAME) ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => {
              nav(LIST_PATHNAME);
            }}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith(STAR_PATHNAME) ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => {
              nav(STAR_PATHNAME);
            }}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith(RUBBISH_PATHNAME) ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => {
              nav(RUBBISH_PATHNAME);
            }}
          >
            &nbsp;回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
export default ManageLayout;
