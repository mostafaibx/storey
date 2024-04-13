import {
  getAllProductsQueryFn,
  getSelectedProductQueryFn,
  getSortedProductsQueryFn,
} from '@/api/products';
import { useQuery } from '@tanstack/react-query';

const useProductsQuery = ({ id, sort }: { id?: string; sort?: string }) => {
  const { data: allProducts, isLoading: isProductsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProductsQueryFn,
    enabled: !id && !sort,
  });
  const { data: sortedProducts, isLoading: isSortedProductsLoading } = useQuery(
    {
      queryKey: [sort],
      queryFn: () => getSortedProductsQueryFn(sort || ''),
      enabled: !!sort,
    }
  );
  const { data: selectedProduct, isLoading: isSelectedProductLoading } =
    useQuery({
      queryKey: [id],
      queryFn: () => getSelectedProductQueryFn(id),
      enabled: !!id,
    });

  return {
    allProducts,
    isProductsLoading,
    selectedProduct,
    isSelectedProductLoading,
    sortedProducts,
    isSortedProductsLoading,
  };
};

export default useProductsQuery;
