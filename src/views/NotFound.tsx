import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
const NotFound: FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
          <Button
            type="primary"
            onClick={() => {
              nav('/');
            }}
          >
            返回
          </Button>
        }
      />
    </div>
  );
};
export default NotFound;
