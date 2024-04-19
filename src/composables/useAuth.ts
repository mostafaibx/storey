import { loginMutationFn, signupMutationFn } from '@/api/auth';
import { toast } from '@/components/ui/use-toast';
import CookiesServices from '@/services/CookiesServices';
import { loginCredentials, signupCredentials } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const { mutate: login } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials: loginCredentials) =>
      loginMutationFn(userCredintials),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Login failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Login failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });
  const { mutate: signup } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials: signupCredentials) =>
      signupMutationFn(userCredintials),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Signup failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Signup failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });

  const isLogin = () => {
    const jwt = CookiesServices.get('jwt');
    if (jwt) {
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    CookiesServices.remove('jwt');
    window.location.reload();
  };

  return {
    login,
    isLogin,
    signup,
    logout,
  };
};

export default useAuth;
