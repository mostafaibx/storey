import LoginForm from '@/components/login/LoginForm';
import { Toaster } from '@/components/ui/toaster';

const LoginPage = () => {
  return (
    <div className='flex md:h-screen justify-center items-center py-28'>
      <LoginForm />
      <Toaster />
    </div>
  );
};

export default LoginPage;
