import useUser from '@/composables/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const SideBar = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className='flex flex-col items-center justify-center w-11/12 md:w-9/12 bg-white rounded-lg py-4 my-2'>
      <Avatar className='w-28 h-28'>
        <AvatarImage
          src='https://github.com/shadcn.png'
          alt='@shadcn'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className='text-2xl font-bold'>{user?.username}</p>
    </div>
  );
};

export default SideBar;
