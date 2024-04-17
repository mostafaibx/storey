import CoffeeRoastSection from '@/components/Landing/CoffeeType/CoffeeRoastSection';
import CoffeeTypeSection from '@/components/Landing/CoffeeType/CoffeeTypeSection';
import JoinUs from '@/components/Landing/JoinUs/JoinUs';
import LandingSection from '@/components/Landing/LandingSection';
import RecentProducts from '@/components/Landing/RecentProducts/RecentProducts';
import ReceipiesSection from '@/components/Landing/RecepiesSection/ReceipiesSection';
import useUser from '@/composables/useUser';

const HomePage = () => {
  const { user } = useUser();
  return (
    <>
      <LandingSection />
      <RecentProducts />
      <ReceipiesSection />
      <CoffeeTypeSection />
      <CoffeeRoastSection />
      {user && <JoinUs />}
    </>
  );
};

export default HomePage;
