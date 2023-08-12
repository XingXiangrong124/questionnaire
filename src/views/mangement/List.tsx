import { FC } from 'react';
import styles from './common.module.scss';
import QuestionCard from '../../components/QuestionCard';
import SearchQuestion from '../../components/SearchQuestion';
import useQuestionList from '../../hooks/useQuestionList';
import PaginationComponent from '../../components/Pagination';
import { useTitle } from 'ahooks';
import { Typography, Empty, Spin } from 'antd';

const { Title } = Typography;
const List: FC = () => {
  useTitle('我的问卷');
  const { list, loading, total } = useQuestionList();
  console.log(total);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
        {!loading && list.length === 0 && <Empty description="添加你的问卷吧❤" />}
        {list.length > 0 &&
          list.map(q => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>
        <PaginationComponent total={total}></PaginationComponent>
      </div>
    </>
  );
};
export default List;
