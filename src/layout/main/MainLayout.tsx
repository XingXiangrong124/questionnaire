import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from './MainLayout.module.scss';
import Logo from '../../components/Logo';
import User from '../../components/User';
const MainLayout: FC = () => {
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
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Questionnaire &copy;2023 - present. Created by Xing Xiangrong</Footer>
    </Layout>
  );
};
export default MainLayout;
