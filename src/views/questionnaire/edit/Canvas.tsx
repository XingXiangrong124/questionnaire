import { FC, MouseEvent } from 'react';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './Canvas.module.scss';
import useGetComponents from '../../../hooks/useGetComponents';
import { getComponentByType } from '../../../components/Question';
import { ComponentInfoType, selectedComponents } from '../../../store/questionReducer/componentReducer';
import useKeyControl from '../../../hooks/useKeyControl';
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
  const { visibleComponent, selectedID } = useGetComponents();
  const dispatch = useDispatch();
  // 绑定快捷键
  useKeyControl();
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '25vh' }}>
        <Spin />
      </div>
    );
  }
  const clickComponents = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(selectedComponents(id));
  };
  return (
    <div className={styles.canvas}>
      {visibleComponent.map(c => {
        const { fe_id, isLocked } = c;
        const wrapperSelect = styles.selected;
        const wrapperLocked = styles.locked;
        const wrapperClassName = classNames(styles['content-wrapper'], {
          [wrapperSelect]: fe_id === selectedID,
          [wrapperLocked]: isLocked,
        });
        return (
          <div key={fe_id} onClick={e => clickComponents(e, fe_id)} className={wrapperClassName}>
            <div className={styles.control}>{getComponent(c)}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Canvas;
