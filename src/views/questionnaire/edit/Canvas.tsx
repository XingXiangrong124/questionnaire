import { FC } from 'react';
import { Spin } from 'antd';
import TitleComponent from '../../../components/Question/title/TitleComponent';
import InputComponent from '../../../components/Question/Input/InputComponent';
import styles from './Canvas.module.scss';
type PropsType = {
  loading: boolean;
};
const Canvas: FC<PropsType> = ({ loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '25vh' }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      <div className={styles['content-wrapper']}>
        <div className={styles.control}>
          <TitleComponent></TitleComponent>
        </div>
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles.control}>
          <InputComponent></InputComponent>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Canvas;
