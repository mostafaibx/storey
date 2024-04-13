import useAuth from '@/composables/useAuth';
import UserTab from './UserTab';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <div className='pt-8 px-8 pb-4 mb-2 flex flex-row justify-between items-center'>
      <Link to='/'>
        <p className='text-2xl font-bold'>Coffeee</p>
      </Link>
      <div className='md:flex flex-row gap-8 md:text-lg text-md hidden'>
        <Link to={'/store'}>
          <p>Products</p>
        </Link>
        <Link to={'/recipes'}>
          <p>Receipies</p>
        </Link>
        <Link to={'/about-us'}>
          <p>About Us</p>
        </Link>
        <Link to={'/contact-us'}>
          <p>Contact Us</p>
        </Link>
      </div>
      {isLogin() && <UserTab />}
      {!isLogin() && (
        <div className='flex flex-row gap-2'>
          <Link to='/login'>
            <div className='bg-slate-100 text-amber-950 px-4 py-1 rounded-full cursor-pointer hover:bg-coffee-500 hover:text-slate-100'>
              Login
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default memo(Header);
