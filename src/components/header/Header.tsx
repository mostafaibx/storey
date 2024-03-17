import useAuth from '@/composables/useAuth';
import UserTab from './UserTab';
import { Link } from 'react-router-dom';
import useUserQuery from '@/composables/useUserQuery';

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <div className='bg-amber-950 bg-opacity-60 p-4 flex flex-row justify-between items-center fixed w-full z-50 text-white'>
      <Link to='/'>
        <p className='text-3xl font-extrabold'>Logo</p>
      </Link>
      <div className='md:flex flex-row gap-8 md:text-lg hidden'>
        <p>Products</p>
        <p>Receipies</p>
        <p>About US</p>
        <p>Contact</p>
      </div>
      {isLogin() && <UserTab />}
      {!isLogin() && (
        <div className='flex flex-row gap-2'>
          <Link to='/login'>
            <div className='bg-slate-100 text-amber-950 px-4 py-1 rounded-full cursor-pointer hover:bg-amber-900 hover:text-slate-100'>
              Login
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
