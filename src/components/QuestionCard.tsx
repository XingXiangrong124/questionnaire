import { FC, useState } from 'react';
import styles from './QuestionCard.module.scss';
import { Button, Space, Divider, Tag, message, Modal, Spin } from 'antd';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { modifyQuestionList, duplicateQuestionList } from '../api/question';
import { STAR_PATHNAME } from '../router';
import { useRequest } from 'ahooks';
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
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [newIsStar, setNewIsStar] = useState(isStar);
  const [deletedState, setDeletedState] = useState(false);
  const { pathname } = useLocation();
  const { loading: starLoading, run: changeStar } = useRequest(
    async () => {
      const data = await modifyQuestionList(_id, { isStar: !newIsStar });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        setNewIsStar(newIsStar => !newIsStar);
        message.success(newIsStar ? `取消标星` : `成功标星`);
      },
    },
  );
  const { loading: duplicateLoading, run: startDuplicate } = useRequest(
    async () => {
      const data = await duplicateQuestionList(_id);
      return data;
    },
    {
      manual: true,
      onSuccess(result: any) {
        copy();
        nav(`/questionnaire/edit/${result.id}`);
      },
    },
  );
  const copy = () => {
    messageApi.open({
      type: 'success',
      content: '复制成功',
    });
  };
  // 删除功能
  const showWarn = () => {
    setDeleteOpen(true);
  };
  const { run: deleteRun } = useRequest(
    async () => {
      setDeleteLoading(true);
      const data = await modifyQuestionList(_id, { isDeleted: true });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        setDeleteLoading(false);
        setDeleteOpen(false);
        message.success('删除成功');
        setDeletedState(true);
      },
    },
  );
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setDeleteOpen(false);
  };
  if (deletedState) return null;
  if (pathname.startsWith(STAR_PATHNAME) && !newIsStar) return null;
  return (
    <div className={styles.container}>
      <Spin size="large" spinning={starLoading || duplicateLoading}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Link to={isPublished ? `/questionnaire/statistics/${_id}` : `/questionnaire/edit/${_id}`}>
              <Space>
                {newIsStar && <StarFilled style={{ color: '#F6C325' }} />}
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
              <Button type="text" icon={<StarOutlined />} onClick={changeStar}>
                {newIsStar ? '取消标星' : '标星'}
              </Button>
              <Button type="text" icon={<SnippetsOutlined />} onClick={startDuplicate}>
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
                onOk={deleteRun}
                confirmLoading={deleteLoading}
                onCancel={handleCancel}
              ></Modal>
            </Space>
          </div>
        </div>
      </Spin>
    </div>
  );
};
export default QuestionCard;
