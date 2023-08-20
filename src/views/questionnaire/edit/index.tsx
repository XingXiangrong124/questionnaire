import { FC } from 'react';
import { useLoadQuestionDeatil } from '../../../hooks/useLoadQuestionDetail';
import styles from './index.module.scss';
import Canvas from './Canvas';
const Edit: FC = () => {
  const { loading } = useLoadQuestionDeatil();
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
              <div className={styles.canvas}>
                <Canvas loading={loading} />
              </div>
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  );
};
export default Edit;
