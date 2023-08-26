import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useGetComponents from '../../../hooks/useGetComponents';
import { getComponentByType, ComponentPropsConfig } from '../../../components/Question';
import { changeProps } from '../../../store/questionReducer/componentReducer';
function NoSelected() {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>;
}

const PropertyCom: FC = () => {
  const dispatch = useDispatch();
  const { selectedComponent } = useGetComponents();
  if (selectedComponent == null) return <NoSelected />;

  const { type, props } = selectedComponent;
  const componentConfig = getComponentByType(type);
  if (componentConfig == null) return <NoSelected />;
  const { ProperCom } = componentConfig;
  function handleChange(newProps: ComponentPropsConfig) {
    if (selectedComponent == null) return;
    const { fe_id } = selectedComponent;
    dispatch(changeProps({ fe_id, newProps }));
  }

  return <ProperCom {...props} onChange={handleChange} />;
};
export default PropertyCom;
