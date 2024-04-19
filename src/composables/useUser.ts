import { changePasswordMutationFn, getUserData } from '@/api/user';
import { passwordChange } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useUser = () => {
  const { isLogin } = useAuth();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
    enabled: !!isLogin(),
  });

  const { mutate: changePassword } = useMutation({
    mutationKey: ['user'],
    mutationFn: (passwords: passwordChange) =>
      changePasswordMutationFn(passwords),
  });

  return { user, isLoading, error, changePassword };
};

export default useUser;
