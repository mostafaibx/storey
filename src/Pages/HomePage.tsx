import JoinUs from '@/components/Landing/JoinUs/JoinUs';
import LandingSection from '@/components/Landing/LandingSection';
import RecentProducts from '@/components/Landing/RecentProducts/RecentProducts';

const HomePage = () => {
  return (
    <>
      <LandingSection />
      <RecentProducts />
      <JoinUs />
    </>
  );
};

export default HomePage;
