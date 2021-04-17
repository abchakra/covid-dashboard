import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Content } = Layout;

const AppContent = () => {
  return (
    <Content
      className='site-layout-background'
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      Content
    </Content>
  );
};

export default AppContent;
