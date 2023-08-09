import { FC } from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LIST_PATHNAME } from '../router';
import styles from './Home.module.scss';
import { useTitle } from 'ahooks';
const Home: FC = () => {
  const { Title, Paragraph } = Typography;
  const nav = useNavigate();
  useTitle('Questionnaire');
  return (
    <>
      <div className={styles.content}>
        <Title>调查问卷 | 在线投票</Title>
        <Paragraph>已累计创建100份，发布问卷10份，收到答卷199份</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              nav(LIST_PATHNAME);
            }}
          >
            开始使用
          </Button>
        </div>
      </div>
    </>
  );
};
export default Home;
