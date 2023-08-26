import { FC } from 'react';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { getComponentByGroup, ComponentConfigType } from '../../../components/Question';
import styles from './ComponentLib.module.scss';
import { nanoid } from 'nanoid';
import { addComponent } from '../../../store/questionReducer/componentReducer';
const { Title } = Typography;
const ComponentLib: FC = () => {
  const dispatch = useDispatch();

  function getComponents(c: ComponentConfigType) {
    const { Component, type, title, defaultProps } = c;
    function clickAddComponent() {
      dispatch(
        addComponent({
          fe_id: nanoid(),
          type,
          title,
          props: defaultProps,
        }),
      );
    }
    return (
      <div className={styles['content-wrapper']} key={type} onClick={() => clickAddComponent()}>
        <div className={styles['control']}>
          <Component />
        </div>
      </div>
    );
  }

  return (
    <div>
      {getComponentByGroup.map((c, index) => {
        const { groupName, componentGroup } = c;
        return (
          <div key={groupName}>
            <Title level={4} style={{ marginTop: index > 0 ? '20px' : '0px', fontSize: '16px' }}>
              {groupName}
            </Title>
            {componentGroup.map(com => {
              return getComponents(com);
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;
