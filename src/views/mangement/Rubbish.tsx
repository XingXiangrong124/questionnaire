import { FC } from 'react';
import styles from './common.module.scss';
import { useTitle } from 'ahooks';
import { Typography } from 'antd';
import RubbishTable from '../../components/RubbishTable';
import PaginationComponent from '../../components/Pagination';
import useQuestionList from '../../hooks/useQuestionList';
import SearchQuestion from '../../components/SearchQuestion';
const { Title } = Typography;
const Rubbish: FC = () => {
  const { list, loading, total } = useQuestionList({ isDeleted: true });
  useTitle('回收站');
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <SearchQuestion />
        </div>
      </div>
      <div className={styles.content}>
        <RubbishTable list={list} loading={loading} />
      </div>
      <div className={styles.footer}>
        <PaginationComponent total={total} />
      </div>
    </div>
  );
};
export default Rubbish;
