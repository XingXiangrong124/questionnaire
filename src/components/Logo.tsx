import { FC } from 'react';
import { Space, Typography } from 'antd';
import IconFont from './IconFont';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
const Logo: FC = () => {
  const { Title } = Typography;
  return (
    <div className={styles.logo}>
      <Link to="/">
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
