import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/views/login/Login';
import Welcome from '@/views/welcome/Welcome.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/welcome',
    element: <Welcome />
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
