import { getAllProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';

const useProductsQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  return { data, isLoading };
};

export default useProductsQuery;
