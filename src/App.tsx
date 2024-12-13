import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index';
import { ConfigProvider, App as AntdApp } from 'antd';
import AntdGlobal from '@/components/antd-global';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9D68D3'
        }
      }}>
      <AntdApp>
        <AntdGlobal></AntdGlobal>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
