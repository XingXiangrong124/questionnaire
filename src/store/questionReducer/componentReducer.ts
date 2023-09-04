import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentPropsConfig } from '../../components/Question';
import { findNewSelectedID } from './util';
export type ComponentInfoType = {
  fe_id: string; // 前端生成id Mongodb不认这种格式
  type: string;
  title: string;
  props: ComponentPropsConfig;
};
export type ComponentListType = {
  componentList: Array<ComponentInfoType>;
  selectedID: string;
};

const INIT_STATE: ComponentListType = {
  componentList: [],
  selectedID: '',
};

const componentListSlice = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentListType, action: PayloadAction<ComponentListType>) => {
      return action.payload;
    },
    // createSlice里面已经内置了immer
    selectedComponents: (state: ComponentListType, action: PayloadAction<string>) => {
      state.selectedID = action.payload;
    },
    addComponent: (state: ComponentListType, action: PayloadAction<ComponentInfoType>) => {
      const { selectedID, componentList } = state;
      const newComponent = action.payload;
      const index = componentList.findIndex(item => item.fe_id === selectedID);
      if (index >= 0) {
        // 选中组件
        state.componentList.splice(index + 1, 0, newComponent);
      } else {
        // 未选中
        state.componentList.push(newComponent);
      }
      state.selectedID = newComponent.fe_id;
    },
    // 修改组件属性
    changeProps: (
      state: ComponentListType,
      action: PayloadAction<{ fe_id: string; newProps: ComponentPropsConfig }>,
    ) => {
      const { fe_id, newProps } = action.payload;
      const component = state.componentList.find(item => item.fe_id === fe_id);
      if (component) component.props = { ...component.props, ...newProps };
    },
    // 删除组件
    removeComponent: (state: ComponentListType) => {
      const index = state.componentList.findIndex(item => item.fe_id === state.selectedID);
      if (index < 0) return;
      state.selectedID = findNewSelectedID(state.selectedID, state.componentList);
      state.componentList.splice(index, 1);
    },
  },
});
export const { resetComponents, selectedComponents, addComponent, changeProps, removeComponent } =
  componentListSlice.actions;
export default componentListSlice.reducer;
