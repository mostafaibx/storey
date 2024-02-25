import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { useMutation } from '@tanstack/react-query';

const date = new Date();
date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
const options = {
  path: '/',
  expires: date,
};

const loginMutationFn = async (userCredintials: any) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredintials),
    }
  );
  const data = await response.json();

  CookiesServices.set('jwt', data.jwt, options);
  toast({
    description: 'Login successful.',
  });
  return data;
};

const useAuth = () => {
  const { mutate: login } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials) => loginMutationFn(userCredintials),
  });

  const isLogin = () => {
    const jwt = CookiesServices.get('jwt');
    if (jwt) {
      return true;
    } else {
      return false;
    }
  };

  return {
    login,
    isLogin,
  };
};

export default useAuth;
