import { FC, useState, useEffect } from 'react';
import styles from './common.module.scss';
import { produce } from 'immer';
import QuestionCard from '../../components/QuestionCard';
import { useTitle } from 'ahooks';
import { Typography, Empty } from 'antd';
const { Title } = Typography;
const rawDataList = [
  {
    _id: 'q2',
    name: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 3,
    createAt: '8月1日 20:31',
  },
  {
    _id: 'q3',
    name: '问卷3',
    isPublished: true,
    isStar: true,
    answerCount: 1,
    createAt: '8月13日 20:35',
  },
];
const Star: FC = () => {
  const [questions, setQuestions] = useState(rawDataList);
  useTitle('星标问卷');
  useEffect(
    () =>
      setQuestions(
        produce(questions, (draft: any) => {
          draft.push({
            _id: 'q4',
            name: '问卷4',
            isPublished: false,
            isStar: true,
            answerCount: 1,
            createAt: '8月17日 21:35',
          });
        }),
      ),
    [],
  );
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questions.length === 0 && <Empty description="&nbsp;暂无星标问卷❤" />}
        {questions.length > 0 &&
          questions.map(q => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>Loading... 滚动加载更多</div>
    </div>
  );
};
export default Star;
