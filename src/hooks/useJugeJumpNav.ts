import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useGetUserInfo from './useGetUserInfo';
import { NoNeedLoginIN, LIST_PATHNAME, LOGIN_PATHNAME } from '../router';
function useJugeJumpNav(waitLoadingUserInfo: boolean) {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (waitLoadingUserInfo) return;
    // 已经登录的情况
    if (username) {
      if (NoNeedLoginIN(pathname)) {
        nav(LIST_PATHNAME);
      }
      return;
    }
    // 没有登录的情况
    if (!NoNeedLoginIN(pathname)) {
      nav(LOGIN_PATHNAME);
    }
  }, [waitLoadingUserInfo, pathname, username]);
}

export default useJugeJumpNav;
