import { changePasswordMutationFn, getUserData } from '@/api/user';
import { passwordChange } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });

  const { mutate: changePassword } = useMutation({
    mutationKey: ['user'],
    mutationFn: (passwords: passwordChange) =>
      changePasswordMutationFn(passwords),
  });

  return { user, isLoading, error, changePassword };
};

export default useUser;
