import CookiesServices from '@/services/CookiesServices';
import { useQuery } from '@tanstack/react-query';

const getCartItems = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/users/me`,
    {
      headers: {
        Authorization: `Bearer ${CookiesServices.get('jwt')}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
const useUserQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItems,
  });
  return { data, isLoading, error };
};

export default useUserQuery;
