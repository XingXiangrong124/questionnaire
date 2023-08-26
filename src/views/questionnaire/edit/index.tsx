import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useLoadQuestionDeatil } from '../../../hooks/useLoadQuestionDetail';
import styles from './index.module.scss';
import { selectedComponents } from '../../../store/questionReducer/componentReducer';
import Canvas from './Canvas';
import LeftPart from './LeftPart';
const Edit: FC = () => {
  const { loading } = useLoadQuestionDeatil();
  const dispatch = useDispatch();
  const clearClick = () => {
    dispatch(selectedComponents(''));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Edit Header</div>
      <div className={styles.contentBackground}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <LeftPart />
            </div>
          </div>
          <div className={styles.main} onClick={clearClick}>
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
