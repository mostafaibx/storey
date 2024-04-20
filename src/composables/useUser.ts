import { changePasswordMutationFn, getUserData } from '@/api/user';
import { passwordChange } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { toast } from '@/components/ui/use-toast';

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
    onSuccess: () => {
      toast({
        title: 'Password changed',
        description: 'Password changed successfully',
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          description: 'Change password failed: ' + error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          description: 'Change password failed: An unknown error occurred',
          variant: 'destructive',
        });
      }
    },
  });

  return { user, isLoading, error, changePassword };
};

export default useUser;
