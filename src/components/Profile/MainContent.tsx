import useUser from '@/composables/useUser';
import { Button } from '../ui/button';

const MainContent = () => {
  const { user } = useUser();
  return (
    <div className='flex flex-col items-center justify-center w-11/12 md:w-9/12 bg-white rounded-lg my-2'>
      <div className='flex flex-colitems-center justify-around w-full'>
        <p>Email: {user?.email}</p>
        <Button>Please Comfirm your Email</Button>
      </div>
      <p>Change your password</p>
    </div>
  );
};

export default MainContent;
