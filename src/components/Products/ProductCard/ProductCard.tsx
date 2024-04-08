import { Button } from '../../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import { textSlicer } from '../../../utils/functions';
import useCart from '@/composables/useCart';
import { Product, cartItem } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product, id }: { product: Product; id: string }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cartItem: cartItem = {
      id,
      stock: product.stock,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail?.data?.attributes?.url,
      quantity: 1,
    };

    event.stopPropagation();

    addToCart(cartItem);
  };

  const openProductHandler = () => {
    navigate(`/store/${id}`);
  };

  return (
    <Card
      className='w-60 h-96 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300'
      onClick={openProductHandler}
    >
      <CardHeader>
        <div className='w-full h-48 flex justify-center items-baseline'>
          <img
            className='w-auto max-h-48 rounded-t-xl object-cover'
            src={`${import.meta.env.VITE_SERVER_URL}${
              product?.thumbnail?.data?.attributes?.url
            }`}
          />
        </div>
        <Rating rating={product.rating} />
        <CardTitle>{textSlicer(product.title, 23)}</CardTitle>
      </CardHeader>
      <CardContent className='pt-0'>
        <CardDescription>{textSlicer(product.description, 23)}</CardDescription>
      </CardContent>
      <CardFooter className='justify-between'>
        <p className='text-sm'>
          <strong>Price: </strong>
          {product.price} €
        </p>
        <Button onClick={addToCartHandler}>TO CART</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
