import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from 'ahooks';
import { getUserInfo } from '../api/user';
import useGetUserInfo from './useGetUserInfo';
import { loginReducer } from './../store/userReducer';

function useLoadUserInfo() {
  const [waitLoadingUserInfo, setWaitLoadingUserInfo] = useState(true);
  const { username } = useGetUserInfo();
  const dispatch = useDispatch();
  const { run } = useRequest(
    async () => {
      const data = await getUserInfo();
      return data;
    },
    {
      manual: true,
      onSuccess(result: any) {
        const { username } = result;
        dispatch(loginReducer({ username }));
      },
      onFinally() {
        setWaitLoadingUserInfo(false);
      },
    },
  );
  useEffect(() => {
    if (username) {
      setWaitLoadingUserInfo(false);
      return;
    }
    run();
  }, [username]);
  return waitLoadingUserInfo;
}
export default useLoadUserInfo;
