import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import useLoadUserInfo from '../../hooks/useLoadUserInfo';
import useJugeJumpNav from '../../hooks/useJugeJumpNav';
const QuestionLayout: FC = () => {
  const waitLoading = useLoadUserInfo();
  useJugeJumpNav(waitLoading);
  return (
    <div>
      {waitLoading ? (
        <div style={{ textAlign: 'center', marginTop: '25vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
export default QuestionLayout;
