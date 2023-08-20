import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserInfo } from './userReducer';
export type StateType = {
  userInfo: UserInfo;
};
export default configureStore({
  reducer: { userInfo: userReducer },
});
