import React from 'react';
import { Layout, Watermark } from 'antd';
import LayoutHeader from '@/layout/Header';
import LayoutFooter from '@/layout/Footer';
import LayoutMenu from '@/layout/Menu';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;
const App: React.FC = () => {
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
          }}
        >
          <div className="demo-logo-vertical" />
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content className="h-[calc(100vh-50px)] p-[20px] overflow-auto">
            <div className="h-[calc(100vh-170px)]">
              <Outlet></Outlet>
            </div>
            <LayoutFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
