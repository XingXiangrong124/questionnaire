import { useSelector } from 'react-redux';
import { StateType } from './../store/index';
import { ComponentListType } from '../store/questionReducer/componentReducer';
function useGetComponents() {
  const component = useSelector<StateType>(state => state.component);
  const { componentList = [], selectedID, copiedComponent } = component as ComponentListType;
  const selectedComponent = componentList.find(item => item.fe_id === selectedID);
  const visibleComponent = componentList.filter(item => {
    const hasHidden = item.hasOwnProperty('isHidden');
    if (!hasHidden || !item.isHidden) return true;
    return false;
  });
  return { componentList, selectedID, selectedComponent, visibleComponent, copiedComponent };
}

export default useGetComponents;
