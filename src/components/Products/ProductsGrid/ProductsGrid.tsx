import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ProductCard/ProductCard';
import { Skeleton } from '../../ui/skeleton';

type Product = {
  createdAt: string;
  description: string;
  pid: string;
  price: number;
  publishedAt: string;
  rating: number; // TODO: change it into object with number of rates and average rate
  stock: number;
  title: string;
  updatedAt: string;
};

const ProductsGrid = () => {
  const getAllProducts = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/products?populate=thumbnail`
    );
    const result = await data.json();
    return result;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (isLoading)
    return (
      <div className='container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center'>
        {[...Array(12)].map((_, index) => (
          <div
            className='flex flex-col space-y-3'
            key={index}
          >
            <Skeleton className='h-[125px] w-[250px] rounded-xl' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[250px]' />
              <Skeleton className='h-4 w-[200px]' />
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className='container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center'>
      {!isLoading &&
        data.data?.map((product: { attributes: Product; id: number }) => (
          <ProductCard
            key={product.id}
            product={product.attributes}
          />
        ))}
    </div>
  );
};

export default ProductsGrid;
