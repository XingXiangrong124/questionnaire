import { FC } from 'react';
import { Button } from 'antd/es/radio';
import { useNavigate } from 'react-router-dom';
const Register: FC = () => {
  const nav = useNavigate();
  return (
    <>
      <div>Register</div>
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
export default Register;
