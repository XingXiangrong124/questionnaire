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
      <div>header</div>
      {waitLoading && <Spin size="large" style={{ textAlign: 'center', marginTop: '25vh' }}></Spin>}
      {!waitLoading && <Outlet />}
    </div>
  );
};
export default QuestionLayout;
