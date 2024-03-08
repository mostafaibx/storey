import useAuth from '@/composables/useAuth';
import { Outlet, useLocation, Navigate } from 'react-router';

function LoggedoutPrivateRoute() {
  const location = useLocation();
  const { isLogin } = useAuth();

  return isLogin() ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      state={{ from: location }}
      replace
    ></Navigate>
  );
}

export default LoggedoutPrivateRoute;
