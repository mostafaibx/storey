import useAuth from '@/composables/useAuth';
import { Outlet, useLocation, Navigate } from 'react-router';

function LoggedinPrivateRoute() {
  const location = useLocation();
  const { isLogin } = useAuth();

  return isLogin() ? (
    <Navigate
      to='/'
      state={{ from: location }}
      replace
    ></Navigate>
  ) : (
    <Outlet />
  );
}

export default LoggedinPrivateRoute;
