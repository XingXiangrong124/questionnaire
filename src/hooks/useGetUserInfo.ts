import { useSelector } from 'react-redux';
import { UserInfo } from './../store/userReducer';
import { StateType } from '../store';
function useGetUserInfo() {
  const { username } = useSelector<StateType>(state => state.userInfo) as UserInfo;
  return { username };
}
export default useGetUserInfo;
