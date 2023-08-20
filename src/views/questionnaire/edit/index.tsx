import { FC } from 'react';
import { useRequestQDeatil } from '../../../hooks/useRequestQDeatil';
import styles from './index.module.scss';
const Edit: FC = () => {
  // const { loading, data } = useRequestQDeatil();
  return (
    <div className={styles.container}>
      <div className={styles.header}>Edit Header</div>
      <div className={styles.contentBackground}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div></div>
          </div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <div className={styles.canvas}>画布，测试</div>
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  );
};
export default Edit;
