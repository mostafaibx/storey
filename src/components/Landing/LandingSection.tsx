import landingBanner from '../../assets/landing-banner.png';

const LandingSection = () => {
  return (
    <div className='flex justify-center items-center relative'>
      <img
        src={landingBanner}
        className='w-10/12 h-autoc:\Users\User\Downloads\bg-pattern.png object-cover'
      />
    </div>
  );
};

export default LandingSection;
