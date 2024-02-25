import LoginForm from '@/components/login/LoginForm';
import { Toaster } from '@/components/ui/toaster';

const LoginPage = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <LoginForm />
      <Toaster />
    </div>
  );
};

export default LoginPage;
