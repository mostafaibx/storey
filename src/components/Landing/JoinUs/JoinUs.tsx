import { Button } from '@/components/ui/button';

const JoinUs = () => {
  return (
    <div className='flex flex-col gap-4 h-48 bg-coffee-300  px-12 lg:px-24 lg:py-10 py-6 mt-10'>
      <p className='text-2xl lg:text-3xl font-bold text-white'>Join Us</p>
      <p className='text-lg lg:text-xl font-bold text-white'>
        Do you want to join us and get the best offers?
      </p>
      <Button
        variant='outline'
        className='w-24 self-end'
      >
        Signup
      </Button>
    </div>
  );
};

export default JoinUs;
