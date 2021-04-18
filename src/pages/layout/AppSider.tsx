import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeOutlined,
  AreaChartOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSider = () => {
  const history = useHistory();

  const handleSiderMenuClick = (action: any) => {
    // console.log('menu:', action);
    switch (action.key) {
      case 'home':
        history.push('/home');
        break;
      case 'statistics':
        history.push('/statistics');
        break;
      case 'info':
        history.push('/info');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <Sider width={200} className='site-layout-background'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleSiderMenuClick}
      >
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='statistics' icon={<AreaChartOutlined />}>
          Statistics
        </Menu.Item>
        <Menu.Item key='info' icon={<NotificationOutlined />}>
          Info
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
