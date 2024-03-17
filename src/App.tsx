import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Rootlayout from './Pages/Rootlayout';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import LoggedinPrivateRoute from './Pages/LoggedinPrivateRoute';
import LoggedoutPrivateRoute from './Pages/LoggedoutPrivateRoute';
import RegisterPage from './Pages/RegisterPage';
import AboutUsPage from './Pages/AboutUsPage';
import StorePage from './Pages/StorePage';
import ReceipiesPage from './Pages/ReceipiesPage';
import ProductPage from './Pages/ProductPage';
import ContactUsPage from './Pages/ContactUsPage';

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
          path: 'about-us',
          element: <AboutUsPage />,
        },
        {
          path: 'contact-us',
          element: <ContactUsPage />,
        },
        {
          path: 'store',
          element: <StorePage />,
        },
        {
          path: 'recipes',
          element: <ReceipiesPage />,
        },
        {
          path: 'store/:id',
          element: <ProductPage />,
        },
        {
          // routes that cant be accessed after login
          path: '/',
          element: <LoggedinPrivateRoute />,
          children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
          ],
        },
        {
          // routes that can be accessed after login
          path: '/',
          element: <LoggedoutPrivateRoute />,
          children: [{ path: 'cart', element: <CartPage /> }],
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
