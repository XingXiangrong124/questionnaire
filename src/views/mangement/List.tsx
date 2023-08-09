import { FC, useState, useEffect } from 'react';
import styles from './common.module.scss';
import { produce } from 'immer';
import QuestionCard from '../../components/QuestionCard';
import { useTitle } from 'ahooks';
import { Typography } from 'antd';
const rawDataList = [
  {
    _id: 'q1',
    name: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: '8月1日 20:30',
  },
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
    isStar: false,
    answerCount: 1,
    createAt: '8月13日 20:35',
  },
];
const List: FC = () => {
  useTitle('我的问卷');
  const [questions, setQuestions] = useState(rawDataList);
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
  const { Title } = Typography;
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questions.length &&
          questions.map(q => {
            const { _id } = q;
            return (
              <>
                <QuestionCard key={_id} {...q}></QuestionCard>
              </>
            );
          })}
      </div>
      <div className={styles.footer}>Loading... 滚动加载更多</div>
    </>
  );
};
export default List;
