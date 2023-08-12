import { FC } from 'react';
import styles from './common.module.scss';
import QuestionCard from '../../components/QuestionCard';
import SearchQuestion from '../../components/SearchQuestion';
import useQuestionList from '../../hooks/useQuestionList';
import { useTitle } from 'ahooks';
import { Typography, Empty, Spin } from 'antd';
const { Title } = Typography;

const Star: FC = () => {
  const { list, loading } = useQuestionList({ isStar: true });
  useTitle('星标问卷');
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <SearchQuestion />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ display: 'flex', alignSelf: 'flex-end', justifyContent: 'center' }}>
            <Spin size="large" />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="&nbsp;暂无星标问卷❤" />}
        {list.length > 0 &&
          list.map(q => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>Loading... 滚动加载更多</div>
    </div>
  );
};
export default Star;
