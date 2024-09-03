import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9D68D3'
        }
      }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
