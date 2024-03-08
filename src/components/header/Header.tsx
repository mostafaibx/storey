import useAuth from '@/composables/useAuth';
import { Button } from '../ui/button';
import UserTab from './UserTab';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <div className='bg-red-500 p-2 flex flex-row justify-between'>
      <p>Logo</p>
      {isLogin() && <UserTab />}
      {!isLogin() && (
        <div className='flex flex-row gap-2'>
          <Link to='/login'>
            <Button>Login</Button>
          </Link>
          <Button>Signup</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
