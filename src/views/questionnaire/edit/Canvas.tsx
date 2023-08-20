import { FC } from 'react';
import { Spin } from 'antd';
// import TitleComponent from '../../../components/Question/title/TitleComponent';
// import InputComponent from '../../../components/Question/Input/InputComponent';
import styles from './Canvas.module.scss';
import useGetComponents from '../../../hooks/useGetComponents';
import { getComponentByType } from '../../../components/Question';
import { ComponentInfoType } from '../../../store/questionReducer/componentReducer';
type PropsType = {
  loading: boolean;
};
function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo;
  const ComponentConfig = getComponentByType(type);
  if (!ComponentConfig) return null;
  const { Component } = ComponentConfig;
  return <Component {...props} />;
}
const Canvas: FC<PropsType> = ({ loading }) => {
  const componentList = useGetComponents();
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '25vh' }}>
        <Spin />
      </div>
    );
  }
  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c;
        return (
          <div key={fe_id} className={styles['content-wrapper']}>
            <div className={styles.control}>{getComponent(c)}</div>
          </div>
        );
      })}
      {/* <div className={styles['content-wrapper']}>
        <div className={styles.control}>
          <TitleComponent></TitleComponent>
        </div>
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles.control}>
          <InputComponent></InputComponent>
        </div>
      </div> */}
    </div>
  );
};
export default Canvas;
