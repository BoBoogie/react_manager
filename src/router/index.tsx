import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/views/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>welcome</div>
  },
  {
    path: '/login',
    element: <Login />
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
