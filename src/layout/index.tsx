import React from 'react';
import { Layout, Watermark } from 'antd';
import LayoutHeader from '@/layout/Header';
import LayoutFooter from '@/layout/Footer';
import LayoutMenu from '@/layout/Menu';
import { Outlet } from 'react-router-dom';
import useStore from '@/store';

const { Content, Sider } = Layout;
const App: React.FC = () => {
  const userInfo = useStore(state => state.userInfo);
  return (
    <Watermark content={userInfo.userName}>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="demo-logo-vertical" />
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content className="h-[calc(100vh-50px)] p-[20px] overflow-auto">
            <div className="min-h-[calc(100vh-100px)]">
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
