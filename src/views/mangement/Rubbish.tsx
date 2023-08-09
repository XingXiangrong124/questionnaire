import { FC } from 'react';
import styles from './common.module.scss';
import { useTitle } from 'ahooks';
import { Typography } from 'antd';
import RubbishTable from '../../components/RubbishTable';
const { Title } = Typography;
const Rubbish: FC = () => {
  useTitle('回收站');
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        <RubbishTable />
      </div>
      <div className={styles.footer}>分页</div>
    </div>
  );
};
export default Rubbish;
