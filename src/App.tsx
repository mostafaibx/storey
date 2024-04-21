import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import LoadingPage from './Pages/LoadingPage';
const Rootlayout = lazy(() => import('./Pages/Rootlayout'));
const ErrorPage = lazy(() => import('./Pages/ErrorPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const CartPage = lazy(() => import('./Pages/CartPage'));

const LoggedinPrivateRoute = lazy(() => import('./Pages/LoggedinPrivateRoute'));
const LoggedoutPrivateRoute = lazy(
  () => import('./Pages/LoggedoutPrivateRoute')
);
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const AboutUsPage = lazy(() => import('./Pages/AboutUsPage'));
const StorePage = lazy(() => import('./Pages/StorePage'));
const ReceipiesPage = lazy(() => import('./Pages/ReceipiesPage'));
const ProductPage = lazy(() => import('./Pages/ProductPage'));
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage'));
const CheckoutPage = lazy(() => import('./Pages/CheckoutPage'));
const ProfilePage = lazy(() => import('./Pages/ProfilePage'));
const OrdersPage = lazy(() => import('./Pages/OrdersPage'));
const OrderSubmitted = lazy(() => import('./Pages/OrderSubmitted'));
const RedirectPage = lazy(() => import('./Pages/RedirectPage'));

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
          path: 'connect/:provider/redirect',
          element: <RedirectPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          // routes that can't be accessed after login
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
          children: [
            { path: 'checkout/:id', element: <CheckoutPage /> },
            { path: 'profile', element: <ProfilePage /> },
            { path: 'orders', element: <OrdersPage /> },
            { path: 'ordersubmitted/:id', element: <OrderSubmitted /> },
          ],
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
