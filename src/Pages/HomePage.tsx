import CoffeeTypeSection from '@/components/Landing/CoffeeType/CoffeeTypeSection';
import JoinUs from '@/components/Landing/JoinUs/JoinUs';
import LandingSection from '@/components/Landing/LandingSection';
import RecentProducts from '@/components/Landing/RecentProducts/RecentProducts';
import ReceipiesSection from '@/components/Landing/RecepiesSection/ReceipiesSection';

const HomePage = () => {
  return (
    <>
      <LandingSection />
      <RecentProducts />
      <ReceipiesSection />
      <CoffeeTypeSection />
      <JoinUs />
    </>
  );
};

export default HomePage;
