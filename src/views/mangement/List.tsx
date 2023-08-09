import { FC, useState, useEffect } from 'react';
import styles from './common.module.scss';
import { produce } from 'immer';
import QuestionCard from '../../components/QuestionCard';
import { useTitle } from 'ahooks';
import { Typography, Empty } from 'antd';
const { Title } = Typography;
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
  const [questions, setQuestions] = useState(rawDataList);
  useTitle('我的问卷');
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
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questions.length === 0 && <Empty description="添加你的问卷吧❤" />}
        {questions.length &&
          questions.map(q => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};
export default List;
