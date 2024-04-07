import Footer from '@/components/UiHelpers/Footer';
import Header from '@/components/header/Header';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
