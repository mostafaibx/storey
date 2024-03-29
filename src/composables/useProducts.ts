import {
  getAllProductsQueryFn,
  getSelectedProductQueryFn,
} from '@/api/products';
import { useQuery } from '@tanstack/react-query';

const useProductsQuery = (id: string) => {
  const { data: allProducts, isLoading: isProductsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProductsQueryFn,
  });
  const { data: selectedProduct, isLoading: isSelectedProductLoading } =
    useQuery({
      queryKey: [id],
      queryFn: () => getSelectedProductQueryFn(id),
    });

  return {
    allProducts,
    isProductsLoading,
    selectedProduct,
    isSelectedProductLoading,
  };
};

export default useProductsQuery;
