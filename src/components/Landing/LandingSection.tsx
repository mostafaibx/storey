import mokapot from '../../assets/moka-pot.png';
import CoffeeBeans from './CoffeeBeans';

const LandingSection = () => {
  return (
    <div className='flex flex-col justify-center items-center h-4/6 md:h-screen relative overflow-hidden'>
      <CoffeeBeans />
      <div>
        <p className='text-xl md:text-4xl font-extrabold'>SINCE - 2024</p>
      </div>
      <img
        src={mokapot}
        className='w-8/12 md:w-4/12  h-auto'
      />
    </div>
  );
};

export default LandingSection;
