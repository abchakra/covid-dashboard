import { Layout } from 'antd';
import 'antd/dist/antd.css';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import RoutingList from '../../router/AppRouter';

const { Content } = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <AppHeader></AppHeader>
      <Layout>
        <AppSider></AppSider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
              <RoutingList />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
