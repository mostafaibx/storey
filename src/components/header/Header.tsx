import useAuth from '@/composables/useAuth';
import { Button } from '../ui/button';
import UserTab from './UserTab';

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <div className='bg-red-500 p-2 flex flex-row justify-between'>
      <p>Logo</p>
      {isLogin() && <UserTab />}
      {!isLogin() && (
        <div className='flex flex-row gap-2'>
          <Button>Login</Button>
          <Button>Signup</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
