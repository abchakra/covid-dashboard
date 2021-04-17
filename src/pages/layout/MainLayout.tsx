import { Layout } from 'antd';
import 'antd/dist/antd.css';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';

const MainLayout = () => {
  return (
    <Layout>
      <AppHeader></AppHeader>
      <Layout>
        <AppSider></AppSider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <AppContent></AppContent>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
