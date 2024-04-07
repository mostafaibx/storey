import LoginForm from '@/components/login/LoginForm';
import { Toaster } from '@/components/ui/toaster';

const LoginPage = () => {
  return (
    <div className='flex h-screen justify-center content-start items-center flex-wrap pt-16 md:pt-32'>
      <LoginForm />
      <Toaster />
    </div>
  );
};

export default LoginPage;
