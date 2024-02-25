import { loginMutationFn, signupMutationFn } from '@/api/auth';
import CookiesServices from '@/services/CookiesServices';
import { useMutation } from '@tanstack/react-query';

const useAuth = () => {
  const { mutate: login } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials) => loginMutationFn(userCredintials),
  });
  const { mutate: signup } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials) => signupMutationFn(userCredintials),
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
  };

  return {
    login,
    isLogin,
    signup,
    logout,
  };
};

export default useAuth;
