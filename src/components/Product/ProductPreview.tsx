import { Product } from '@/types/types';
import { Button } from '../ui/button';
import SelectSize from './SelectSize';
import Contents from './Contents';
const ProductPreview = ({ product }: { product: Product }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-around items-center w-screen h-full my-16'>
      <div className=''>
        <p className='text-6xl font-extrabold'>{product.title}</p>
        <SelectSize />
        <p>
          <strong>Price:</strong> {product.price} €
        </p>
        <Button
          variant='outline'
          className='my-4'
        >
          Add to cart
        </Button>
        <Contents />
      </div>
      <div className='flex justify-center items-center w-80 h-80  rounded-full pb-16 relative'>
        <img
          className='z-50'
          src={`${import.meta.env.VITE_SERVER_URL}${
            product?.thumbnail?.data?.attributes?.url
          }`}
          alt={product.title}
        />
        <div className='w-72 h-72 bg-gradient-to-t from-coffee-200 to-coffee-100 rounded-full absolute z-0 top-4 shadow-lg shadow-coffee-300 -inset '></div>
      </div>
    </div>
  );
};

export default ProductPreview;
