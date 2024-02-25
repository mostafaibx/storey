import CartDrawer from '@/components/Cart/CartDrawer';
import Header from '@/components/header/Header';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <>
      <Header />
      <CartDrawer />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Rootlayout;
