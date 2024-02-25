import Header from '@/components/header/Header';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Rootlayout;
