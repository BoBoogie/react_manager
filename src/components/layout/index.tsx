import React from 'react';
import { Layout, Watermark } from 'antd';
import LayoutHeader from '@/components/layout/header';
import LayoutFooter from '@/components/layout/footer';
import LayoutMenu from '@/components/layout/menu';
import { Outlet } from 'react-router-dom';
import useStore from '@/store';

const { Content, Sider } = Layout;
const App: React.FC = () => {
  const userInfo = useStore(state => state.userInfo);
  const collapsed = useStore(state => state.collapsed);
  return (
    <Watermark content={userInfo.userName}>
      <Layout>
        <Sider collapsible collapsed={collapsed} trigger={null}>
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content className="h-[calc(100vh-50px)] p-[20px] overflow-auto">
            <div className="min-h-[calc(100vh-170px)]">
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
