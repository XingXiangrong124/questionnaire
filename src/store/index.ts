import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserInfo } from './userReducer';
import componentReducer, { ComponentListType } from './questionReducer/componentReducer';
export type StateType = {
  userInfo: UserInfo;
  component: ComponentListType;
};
export default configureStore({
  reducer: {
    userInfo: userReducer,
    component: componentReducer,
  },
});
