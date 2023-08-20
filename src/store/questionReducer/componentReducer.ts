import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentContentConfig } from '../../components/Question';
export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentContentConfig;
};
export type ComponentListType = {
  componentList: Array<ComponentInfoType>;
};

const INIT_STATE: ComponentListType = {
  componentList: [],
};

const componentListSlice = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentListType, action: PayloadAction<ComponentListType>) => {
      return action.payload;
    },
  },
});
export const { resetComponents } = componentListSlice.actions;
export default componentListSlice.reducer;
