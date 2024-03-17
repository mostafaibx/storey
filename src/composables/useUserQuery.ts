import { getUserData } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

const useUserQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });
  return { data, isLoading, error };
};

export default useUserQuery;
