import { createBrowserRouter, Navigate } from 'react-router-dom';
import Index from '@/views/login';
import Welcome from '@/views/welcome';
import Dashboard from '@/views/dashboard';
import User from '@/views/system/user';
import Layout from '@/layout';
import Dept from '@/views/system/dept';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Index />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/dept',
        element: <Dept />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
  {
    path: '/404',
    element: <div>404</div>
  },
  {
    path: '/403',
    element: <div>403</div>
  }
]);
export default router;
