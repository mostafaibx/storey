import useAuth from '@/composables/useAuth';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router';
import LoadingPage from './LoadingPage';

function LoggedinPrivateRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { isLogin } = useAuth();

  useEffect(() => {
    // Simulate delay in useAuth
    setTimeout(() => {
      setIsLoading(false);
    }, 600); // Adjust timeout as needed
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }
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
