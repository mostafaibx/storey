import { getCartItems } from '@/api/cart';
import { useQuery } from '@tanstack/react-query';

const useUserQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItems,
  });
  return { data, isLoading, error };
};

export default useUserQuery;
