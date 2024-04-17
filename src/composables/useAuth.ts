import { loginMutationFn, signupMutationFn } from '@/api/auth';
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
  });
  const { mutate: signup } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (userCredintials: signupCredentials) =>
      signupMutationFn(userCredintials),
    onSuccess: () => {
      navigate('/');
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
