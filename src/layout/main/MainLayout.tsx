import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from './MainLayout.module.scss';
import Logo from '../../components/Logo';
import User from '../../components/User';
import useLoadUserInfo from '../../hooks/useLoadUserInfo';
import useJugeJumpNav from '../../hooks/useJugeJumpNav';
const MainLayout: FC = () => {
  const waitLoading = useLoadUserInfo();
  useJugeJumpNav(waitLoading);
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <User></User>
        </div>
      </Header>
      {waitLoading && <Spin size="large" style={{ textAlign: 'center', marginTop: '25vh' }}></Spin>}
      <Content className={styles.main}>{!waitLoading && <Outlet />}</Content>
      <Footer className={styles.footer}>Questionnaire &copy;2023 - present. Created by Xing Xiangrong</Footer>
    </Layout>
  );
};
export default MainLayout;
