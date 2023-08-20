import { FC, useState, useEffect } from 'react';
import { Space, Typography } from 'antd';
import IconFont from './IconFont';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import useGetUserInfo from '../hooks/useGetUserInfo';
import { HOME_PATHNAME, LIST_PATHNAME } from '../router';
const Logo: FC = () => {
  const { Title } = Typography;
  const { username } = useGetUserInfo();
  const [pathname, setPathname] = useState(HOME_PATHNAME);
  useEffect(() => {
    if (username) {
      setPathname(LIST_PATHNAME);
    }
  }, [username]);
  return (
    <div className={styles.logo}>
      <Link to={pathname}>
        <Space>
          <Title>
            <IconFont type="icon-chess-knight"></IconFont>
          </Title>
          <Title>Questionnaire</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
