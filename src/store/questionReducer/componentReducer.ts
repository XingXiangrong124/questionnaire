import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { ComponentPropsConfig } from '../../components/Question';
export type ComponentInfoType = {
  fe_id: string;
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
    selectedComponents: (state: ComponentListType, action: PayloadAction<string>) => {
      state.selectedID = action.payload;
    },
  },
});
export const { resetComponents, selectedComponents } = componentListSlice.actions;
export default componentListSlice.reducer;
