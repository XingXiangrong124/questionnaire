import { FC } from 'react';
import styles from './QuestionCard.module.scss';
import { Button, Space, Divider, Tag } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import {
  FormOutlined,
  BarChartOutlined,
  StarOutlined,
  SnippetsOutlined,
  DeleteOutlined,
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
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/questionnaire/statistics/${_id}` : `/questionnaire/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
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
          <Space>
            <Button type="text" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button type="text" icon={<SnippetsOutlined />}>
              复制
            </Button>
            <Button type="text" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
