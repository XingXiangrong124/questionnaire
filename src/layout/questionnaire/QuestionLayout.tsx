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
      {/* <div>header</div> */}
      <Spin size="large" spinning={waitLoading} style={{ margin: '0 auto', marginTop: '25vh' }}>
        <Outlet />
      </Spin>
    </div>
  );
};
export default QuestionLayout;
