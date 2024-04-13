import { getUserData } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });
  return { user, isLoading, error };
};

export default useUser;
