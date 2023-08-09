import { FC, useState } from 'react';
import styles from './QuestionCard.module.scss';
import { Button, Space, Divider, Tag, message, Modal } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import {
  FormOutlined,
  BarChartOutlined,
  StarFilled,
  StarOutlined,
  SnippetsOutlined,
  DeleteOutlined,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';
type CardType = {
  _id: string;
  name: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
};
const QuestionCard: FC<CardType> = (props: CardType) => {
  const { _id, name, isPublished, answerCount, createAt, isStar } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const nav = useNavigate();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const copy = () => {
    messageApi.open({
      type: 'success',
      content: '复制成功',
    });
  };
  const showWarn = () => {
    setDeleteOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setDeleteOpen(false);
      setLoading(false);
      messageApi.open({
        type: 'success',
        content: '删除成功',
      });
    }, 1000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setDeleteOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/questionnaire/statistics/${_id}` : `/questionnaire/edit/${_id}`}>
            <Space>
              {isStar && <StarFilled style={{ color: '#F6C325' }} />}
              {name}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="#87d068">已发布</Tag> : <Tag color="#108ee9">未发布</Tag>}
            <span>答卷:{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px' }}></Divider>
      <div className={styles.operation}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<FormOutlined />}
              type="text"
              size="middle"
              onClick={() => {
                nav(`/questionnaire/edit/${_id}`);
              }}
            >
              编辑问卷
            </Button>
            <Button
              icon={<BarChartOutlined />}
              type="text"
              size="middle"
              onClick={() => {
                nav(`/questionnaire/statistics/${_id}`);
              }}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          {contextHolder}
          <Space>
            <Button type="text" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button type="text" icon={<SnippetsOutlined />} onClick={copy}>
              复制
            </Button>
            <Button type="text" icon={<DeleteOutlined />} onClick={showWarn}>
              删除
            </Button>
            <Modal
              title={
                <Space>
                  <ExclamationCircleTwoTone twoToneColor="#FFD700" style={{ fontSize: '20px' }} />
                  <span>确定删除此问卷吗？</span>
                </Space>
              }
              open={deleteOpen}
              onOk={handleOk}
              confirmLoading={loading}
              onCancel={handleCancel}
            ></Modal>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
