import useUser from '@/composables/useUser';
import { formatDateAndTime } from '@/utils/functions';
import ChangePasswordDialoge from './ChangePasswordDialoge';
import { Dialog, DialogTrigger } from '../ui/dialog';

const MainContent = () => {
  const { user } = useUser();

  return (
    <div className='flex flex-col items-start w-11/12 md:w-9/12 h-screen bg-white rounded-lg mt-2 px-4 py-8'>
      <div className='flex flex-col items-center justify-around mx-4 '>
        <div>
          <p className='my-2'>
            <strong>Email: </strong> {user?.email}
          </p>
        </div>
        <p className='my-2'>
          <strong>User Since: </strong> {formatDateAndTime(user?.createdAt)}
        </p>
      </div>
      <div>
        <Dialog>
          <ChangePasswordDialoge />
          <DialogTrigger className='my-10'>Change your password</DialogTrigger>
        </Dialog>
      </div>
    </div>
  );
};

export default MainContent;
