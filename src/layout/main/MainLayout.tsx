import { FC } from 'react';
import { Outlet } from 'react-router-dom';
const MainLayout: FC = () => {
  return (
    <div>
      <div>header</div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </div>
  );
};
export default MainLayout;
