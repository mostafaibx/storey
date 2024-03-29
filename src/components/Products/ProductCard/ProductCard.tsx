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
      className='w-60 h-96'
      onClick={openProductHandler}
    >
      <CardHeader>
        <img
          className='w-full h-36 rounded-t-xl object-cover'
          src={`${import.meta.env.VITE_SERVER_URL}${
            product?.thumbnail?.data?.attributes?.url
          }`}
        ></img>
        <CardTitle>{textSlicer(product.title, 23)}</CardTitle>
        <CardDescription>{textSlicer(product.description, 45)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
      </CardContent>
      <CardFooter className='justify-between'>
        <Button>BUY NOW</Button>
        <Button onClick={addToCartHandler}>TO CART</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
