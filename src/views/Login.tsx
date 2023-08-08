import { FC } from 'react';
import { Button } from 'antd/es/radio';
import { useNavigate } from 'react-router-dom';
const Login: FC = () => {
  const nav = useNavigate();
  return (
    <>
      <div>Login</div>
      <div>
        <Button
          onClick={() => {
            nav(-1);
          }}
        >
          返回
        </Button>
      </div>
    </>
  );
};
export default Login;
