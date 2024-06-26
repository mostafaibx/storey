import CoffeeBeans from './CoffeeBeans';

const LandingSection = () => {
  return (
    <div className='flex flex-col justify-center items-center h-4/6 md:h-screen relative overflow-hidden'>
      <CoffeeBeans />
      <div>
        <p className='text-xl md:text-4xl font-extrabold z-50'>SINCE - 2024</p>
      </div>
      <img
        src={
          import.meta.env.VITE_CLOUDINARY_BASE_URL +
          '/v1713274731/moka-pot_cdrco5.png'
        }
        className='w-8/12 md:w-4/12  h-auto'
      />
    </div>
  );
};

export default LandingSection;
