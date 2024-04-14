import roastedBean from '@/assets/RoastingBean.png';

const CoffeeRoastSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={roastedBean}
        alt='roasted-bean'
        className='w-48 h-auto'
      />
    </div>
  );
};

export default CoffeeRoastSection;
