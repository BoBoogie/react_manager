import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, theme, Watermark } from 'antd';
import LayoutHeader from '@/layout/Header';
import LayoutFooter from '@/layout/Footer';
import LayoutMenu from '@/layout/Menu';

const { Content, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`
// }));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Watermark content="admin">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div className="demo-logo-vertical" />
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}>
              content
            </div>
          </Content>
          <LayoutFooter />
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
