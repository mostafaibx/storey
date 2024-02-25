import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Rootlayout from './Pages/Rootlayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import LoggedinPrivateRoute from './Pages/LoggedinPrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          // routes that cant be accessed after login
          path: '',
          element: <LoggedinPrivateRoute />,
          children: [{ path: '/login', element: <LoginPage /> }],
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
