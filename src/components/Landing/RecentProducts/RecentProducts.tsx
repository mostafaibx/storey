import ProductCard from '@/components/Products/ProductCard/ProductCard';
import useProductsQuery from '@/composables/useProducts';
import { Product } from '@/types/types';

const RecentProducts = () => {
  const { sortedProducts, isSortedProductsLoading } = useProductsQuery({
    sort: 'createdAt',
  });

  return (
    <div className='md:flex hidden flex-col justify-center items-center relative mx-14 mb-24'>
      <p className='text-4xl font-extrabold mb-16'>Expolre Our New Products</p>
      <div className='flex justify-center gap-4 items-center relative mx-14'>
        {!isSortedProductsLoading &&
          sortedProducts.data?.map(
            (product: { attributes: Product; id: string }) => (
              <ProductCard
                key={product.id}
                product={product.attributes}
                id={product.id}
              />
            )
          )}
      </div>
    </div>
  );
};

export default RecentProducts;
