import './loadingCup.css';

const LoadingCup = () => {
  return (
    <div className='relative'>
      <div className='coffee-cup'>
        <div className='coffee'></div>
        <div className='coffee-2'></div>
      </div>
      <div className='flex justify-around items-baseline'>
        <p className='text-2xl font-bold'>Loading</p>
        <div className='load-dot'></div>
        <div className='load-dot'></div>
        <div className='load-dot'></div>
      </div>
    </div>
  );
};

export default LoadingCup;
