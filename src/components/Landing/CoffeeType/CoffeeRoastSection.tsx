const CoffeeRoastSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={
          import.meta.env.VITE_CLOUDINARY_BASE_URL +
          '/v1713274735/RoastingBean_qewx5k.png'
        }
        alt='roasted-bean'
        className='w-48 h-auto'
      />
    </div>
  );
};

export default CoffeeRoastSection;
