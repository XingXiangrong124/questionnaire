import { FC } from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PATHNAME } from '../router';
const User: FC = () => {
  return (
    <>
      <Link to={REGISTER_PATHNAME}>登录</Link>
    </>
  );
};
export default User;
