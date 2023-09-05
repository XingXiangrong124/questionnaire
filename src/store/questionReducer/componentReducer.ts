import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cloneDeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';
import { ComponentPropsConfig } from '../../components/Question';
import { findNewSelectedID, addNewComponent } from './util';
export type ComponentInfoType = {
  fe_id: string; // 前端生成id Mongodb不认这种格式
  type: string;
  title: string;
  isHidden?: boolean;
  isLocked?: boolean;
  props: ComponentPropsConfig;
};
export type ComponentListType = {
  componentList: Array<ComponentInfoType>;
  selectedID: string;
  copiedComponent: ComponentInfoType | null;
};

const INIT_STATE: ComponentListType = {
  componentList: [],
  selectedID: '',
  copiedComponent: null,
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
    addComponentHandle: (state: ComponentListType, action: PayloadAction<ComponentInfoType>) => {
      // 复用代码
      addNewComponent(state, action.payload);
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
    // 隐藏和显示组件
    changeVisibleComponent: (
      state: ComponentListType,
      action: PayloadAction<{ fe_id: string; isHidden: boolean }>,
    ) => {
      const { fe_id, isHidden } = action.payload;
      if (fe_id === '') return;
      const component = state.componentList.find(item => item.fe_id === fe_id);
      if (component == null) return;
      if (isHidden) {
        state.selectedID = findNewSelectedID(fe_id, state.componentList);
      } else {
        state.selectedID = fe_id;
      }
      component.isHidden = isHidden;
    },

    // 锁定/解锁组件
    changeLockedComponent: (state: ComponentListType, action: PayloadAction<{ fe_id: string }>) => {
      const { fe_id } = action.payload;
      if (fe_id === '') return;
      const component = state.componentList.filter(item => !item.isHidden).find(item => item.fe_id === fe_id);
      if (component) {
        component.isLocked = !component.isLocked;
      }
    },
    // 复制组件
    copiedComponentHandle: (state: ComponentListType, action: PayloadAction<{ fe_id: string }>) => {
      const { fe_id } = action.payload;
      if (fe_id === '') return;
      const component = state.componentList.filter(item => !item.isHidden).find(item => item.fe_id === fe_id);
      if (component) {
        state.copiedComponent = cloneDeep(component);
      }
    },
    // 粘贴
    pastedComponentHandle: (state: ComponentListType) => {
      const copy = state.copiedComponent;
      if (copy) {
        copy.fe_id = nanoid();
        // 复用代码
        addNewComponent(state, copy);
      }
    },
  },
});
export const {
  resetComponents,
  selectedComponents,
  addComponentHandle,
  changeProps,
  removeComponent,
  changeVisibleComponent,
  changeLockedComponent,
  copiedComponentHandle,
  pastedComponentHandle,
} = componentListSlice.actions;
export default componentListSlice.reducer;
