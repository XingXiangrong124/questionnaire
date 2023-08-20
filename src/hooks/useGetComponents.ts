import { useSelector } from 'react-redux';
import { StateType } from './../store/index';
import { ComponentListType } from '../store/questionReducer/componentReducer';
function useGetComponents() {
  const component = useSelector<StateType>(state => state.component);
  const { componentList = [] } = component as ComponentListType;
  return componentList;
}

export default useGetComponents;
