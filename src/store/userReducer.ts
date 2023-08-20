import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserInfo = {
  username: string;
};
const INIT_STATE: UserInfo = { username: '' };

const userSlice = createSlice({
  name: 'userInfo',
  initialState: INIT_STATE,
  reducers: {
    loginReducer(state: UserInfo, action: PayloadAction<UserInfo>) {
      return action.payload;
    },
    logoutReducer: () => INIT_STATE,
  },
});
export const { loginReducer, logoutReducer } = userSlice.actions;
export default userSlice.reducer;
